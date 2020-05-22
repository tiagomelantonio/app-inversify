import { EntityDataMapper } from "../interfaces/EntityDataMapper";
import { Customer } from "../domain/Customer";
import { CustomerEntity } from "../entities/CustomerEntity";

export class CustomerDataMapper implements EntityDataMapper<Customer, CustomerEntity> {

    toDomain(entity: CustomerEntity): Customer {
        if (!entity)
            return null;

        const customer = new Customer();
        customer.id = entity._id.toString();
        customer.name = entity.name;
        customer.email = entity.email;
        customer.age = entity.age;
        return customer;
    }

    toEntity(domain: Customer): CustomerEntity {
        const customerEntity = new CustomerEntity();
        customerEntity.name = domain.name;
        customerEntity.email = domain.email;
        customerEntity.age = domain.age;
        return customerEntity;
    }
}
