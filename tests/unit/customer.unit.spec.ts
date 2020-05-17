import { describe, it } from "mocha";
import { should } from "chai";
import { Customer } from "../../src/domain/Customer";

describe("Unit tests for customer", () => {

    it("Should return true when user is valid", () => {
        const customer = new Customer();

        customer.name = "Tiago Melantonio";
        customer.age = 15;

        should().equal(customer.isValid(), true);
    })

    it("Should return false when user is not valid", () => {
        const customer = new Customer();

        customer.name = "Tiago Melantonio";

        should().equal(customer.isValid(), false);
    })
})