import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
import { DocuScanModule } from './docu-scan/docu-scan.module';
import { OcrModule } from './ocr/ocr.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ItemsModule,
    DocuScanModule,
    OcrModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
