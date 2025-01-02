import { Column, Entity, ObjectIdColumn, Unique, ObjectId } from "typeorm";

@Entity("customers")
@Unique(["email"])
export class CustomerEntity {

    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    age: number;
}
