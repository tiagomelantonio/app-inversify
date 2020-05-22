import { Column, Entity, ObjectID, ObjectIdColumn, Unique } from "typeorm";

@Entity("customers")
@Unique(["email"])
export class CustomerEntity {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    age: number;
}
