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
        const customer = await this.customerRepository.getById(id);
        if (customer === null) {
            throw new Error('Customer not found');
        }
        return customer;
    }

    async insert(domain: Customer): Promise<void> {
        await this.customerRepository.insert(domain)
    }

    async update(id: string, domain: Customer): Promise<void> {
        await this.customerRepository.update(id, domain);
    }

    async remove(id: string): Promise<void> {
        await this.customerRepository.remove(id);
    }
}
