import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("customers")
export class CustomerEntity {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    age: number;
}
