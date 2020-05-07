import { injectable, inject } from "inversify";
import { CustomerRepository } from "../repositories/CustomerRepository";
import { CustomerService } from "./CustomerService";
import { Customer } from "../domain/Customer";

@injectable()
export class CustomerServiceImpl implements CustomerService {

    constructor( @inject("CustomerRepository") private customerRepository: CustomerRepository ) {}

    async getAll(): Promise<Customer[]> {
        return await this.customerRepository.getAll();
    }

    async getById(id: string): Promise<Customer> {
        throw new Error("Method not implemented." + id);
    }

    async insert(entity: Customer): Promise<void> {
        await this.customerRepository.insert(entity)
    }

    async update(entity: Customer): Promise<void> {
        throw new Error("Method not implemented." + entity);
    }

    async remove(id: string): Promise<void> {
        throw new Error("Method not implemented." + id);
    }
}
