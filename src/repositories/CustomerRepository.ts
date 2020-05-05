/* eslint-disable @typescript-eslint/no-empty-interface */
import { Repository } from "./Repository";
import { Customer } from "../domain/Customer";

export interface CustomerRepository extends Repository<Customer> {

}
