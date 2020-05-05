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

    getById(id: string): Promise<import("../domain/Customer").Customer> {
        throw new Error("Method not implemented.");
    }

    insert(model: import("../domain/Customer").Customer): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(model: import("../domain/Customer").Customer): Promise<void> {
        throw new Error("Method not implemented.");
    }

    remove(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
