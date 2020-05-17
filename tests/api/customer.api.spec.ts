import "reflect-metadata";
import faker from 'faker';
import { describe, it, before, after } from "mocha";
import { expect } from 'chai';
import { config } from '../db/Config';
import { CustomerServiceImpl } from "../../src/services/CustomerServiceImpl";
import { CustomerRepositoryImpl } from "../../src/repositories/CustomerRepositoryImpl";
import { createConnection, Connection } from "typeorm";
import { Customer } from "../../src/domain/Customer";

describe("Integrate tests for customer", () => {

    faker.locale = 'pt_BR';
    let db: Connection;
    let customerService: CustomerServiceImpl = null;

    let customerId = '';

    before("", async () => {
        db = await createConnection(config);
        customerService = new CustomerServiceImpl(new CustomerRepositoryImpl())
    })

    it("Should be able to create a customer", async () => {
        const customer = new Customer();
        customer.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        customer.age = faker.random.number({ min: 1, max: 80 });
        
        const result = await customerService.insert(customer);

        expect(result).equal(true);
    })

    it("Should be able to return a list customers", async () => {
        const customers = await customerService.getAll();

        customerId = customers[0].id;

        expect(customers.length).equal(1);
    })

    it("Should be able to return a customer", async () => {
        const customer = await customerService.getById(customerId);
        expect(customer).not.equal(null);
    })

    it("Should be able to update a customer", async () => {
        const customer = await customerService.getById(customerId);

        customer.name = "Joao Silva";
        customer.age = 20;
        await customerService.update(customerId, customer);
        const customerUpdated = await customerService.getById(customerId);

        expect(customerUpdated.age).equal(20);
        expect(customerUpdated.name).equal("Joao Silva");
    })

    it("Should be able to remove a customer", async () => {
        await customerService.remove(customerId);
        const customer = await customerService.getById(customerId);
        
        expect(customer).equal(null);
    })

    after("", () => {
        customerService = null;
        db.close();
    })
})