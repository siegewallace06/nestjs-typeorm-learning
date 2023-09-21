import { Injectable, Logger, HttpException } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { Listing } from './entities/listing.entity';

@Injectable()
export class ItemsService {

  private readonly logger = new Logger(ItemsService.name);
  constructor(
    private readonly entityManager: EntityManager,
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,


  ) { }

  async create(createItemDto: CreateItemDto) {
    const listing = new Listing({
      ...createItemDto.listing,
      rating: 0,
    });
    const item = new Item({
      ...createItemDto,
      listing,
    });
    await this.entityManager.save(item);
    // Log and said Items created for id and stringified item
    this.logger.log(`Items created for id ${item.id} and item ${JSON.stringify(item)}`);

  }

  async findAll() {
    const items = await this.itemsRepository.find();
    // Log and said Items found and stringified items
    this.logger.log(`Items found ${JSON.stringify(items)}`);
    return {
      "status": "success",
      "data": items
    }
  }

  async findOne(id: number) {
    const item = await this.itemsRepository.findOneBy({ id });
    this.logger.log(`Item found for id ${id} and item ${JSON.stringify(item)}`);

    return {
      "status": "success",
      "data": item
    }
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.itemsRepository.findOneBy({ id });
    item.public = updateItemDto.public;

    await this.entityManager.save(item);
    // Log and said Items updated for id and stringified item
    this.logger.log(`Items updated for id ${id} and item ${JSON.stringify(item)}`);

    return {
      "status": "Item has been Updated",
      "data": item
    }
  }

  async remove(id: number) {
    try {
      await this.itemsRepository.delete({ id });
      // Log and said Items deleted for id and stringified item
      this.logger.log(`Items deleted for id ${id}`);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
    return {
      "status": "Item has been deleted",
      "data": []
    }
  }
}
