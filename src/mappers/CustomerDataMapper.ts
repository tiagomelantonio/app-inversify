import { Customer } from "../domain/Customer";
import { CustomerEntity } from "../entities/CustomerEntity";
import { CustomerDTO } from '../dtos/CustomerDTO';
import { injectable } from "inversify";
import { ICustomerDataMapper } from "./ICustomerDataMapper";

@injectable()
export class CustomerDataMapper implements ICustomerDataMapper {

    dtoToDomain(dto: CustomerDTO): Customer {
        const customer = new Customer();
        customer.id = dto.id;
        customer.name = dto.name;
        customer.email = dto.email;
        customer.age = dto.age;
        return customer;
    }

    domainToDTO(domain: Customer | Customer[]): CustomerDTO | CustomerDTO[] {
        if (Array.isArray(domain)) {
            const dtos: CustomerDTO[] = [];
            for (const item of domain) {
                const dto = new CustomerDTO();
                dto.id = item.id;
                dto.name = item.name;
                dto.email = item.email;
                dto.age = item.age;
                dtos.push(dto);
            }
            return dtos;
        } else {
            const dto = new CustomerDTO();
            dto.id = domain.id;
            dto.name = domain.name;
            dto.email = domain.email;
            dto.age = domain.age;
            return dto;
        }
    }

    entityToDomain(entity: CustomerEntity): Customer {
        if (!entity)
            return null;

        const customer = new Customer();
        customer.id = entity._id.toString();
        customer.name = entity.name;
        customer.email = entity.email;
        customer.age = entity.age;
        return customer;
    }

    domainToEntity(domain: Customer): CustomerEntity {
        const customerEntity = new CustomerEntity();
        customerEntity.name = domain.name;
        customerEntity.email = domain.email;
        customerEntity.age = domain.age;
        return customerEntity;
    }
}
