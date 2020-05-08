import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("customers")
export class CustomerEntity {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    age: number;
}
