import { EntityDataMapper } from "../interfaces/EntityDataMapper";
import { Customer } from "../domain/Customer";
import { CustomerEntity } from "../entities/CustomerEntity";
import { CustomerDTO } from "../dtos/CustomerDTO";

export interface ICustomerDataMapper extends EntityDataMapper<Customer, CustomerEntity, CustomerDTO> {

}
