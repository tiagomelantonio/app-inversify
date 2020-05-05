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

    getById(id: string): Promise<Customer> {
        throw new Error("Method not implemented." + id);
    }

    insert(model: Customer): Promise<void> {
        throw new Error("Method not implemented." + model);
    }

    update(model: Customer): Promise<void> {
        throw new Error("Method not implemented." + model);
    }

    remove(id: string): Promise<void> {
        throw new Error("Method not implemented." + id);
    }
}
