import { Request } from "express";
import { EntityDataMapper } from "../interfaces/EntityDataMapper";
import { Customer } from "../domain/Customer";
import { CustomerEntity } from "../entities/CustomerEntity";

export class CustomerDataMapper implements EntityDataMapper<Customer, CustomerEntity> {

    requestToDomain(req: Request): Customer {
        const customer = new Customer();
        customer.name = req.body.name;
        customer.age = req.body.age;
        return customer;
    }

    toDomain(entity: CustomerEntity): Customer {
        const customer = new Customer();
        customer.id = entity.id.toString();
        customer.name = entity.name;
        customer.age = entity.age;
        return customer;
    }

    toDalEntity(domain: Customer): CustomerEntity {
        throw new Error("Method not implemented." + domain);
    }
}
