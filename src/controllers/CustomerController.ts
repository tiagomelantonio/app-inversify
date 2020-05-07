import { Response } from 'express';
import { interfaces, controller, httpGet, httpPost, httpDelete, httpPatch, requestParam, response, request } from "inversify-express-utils";
import { inject } from "inversify";
import { CustomerService } from '../services/CustomerService';
import { Customer } from 'src/domain/Customer';

@controller('/v1/customers')
export class CustomerController implements interfaces.Controller {

    constructor(@inject("CustomerService") private customerService: CustomerService) { }

    @httpGet('/')
    async getAll(@response() res: Response) {
        try {
            const customers = await this.customerService.getAll();
            res.json(customers);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    @httpGet('/:id')
    async getById(@requestParam("id") id: string, @response() res: Response) {
        try {
            const customer = await this.customerService.getById(id);
            res.json(customer);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    @httpPost('/')
    async insert(@request() customer: Customer, @response() res: Response) {
        try {
            await this.customerService.insert(customer);
            res.json({
                status: 200
            });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    @httpPatch('/:id')
    async update() {
        try {

        } catch (error) {

        }
    }

    @httpDelete('/:id')
    async remove() {

    }
}
