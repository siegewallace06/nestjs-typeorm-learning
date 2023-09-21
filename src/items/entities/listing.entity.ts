import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Listing {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    rating: number;

    constructor(listing: Partial<Listing>) {
        Object.assign(this, listing);

    }
}
