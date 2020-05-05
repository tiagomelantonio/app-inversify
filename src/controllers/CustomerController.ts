import { Request, Response } from 'express';
import { interfaces, controller, httpGet } from "inversify-express-utils";
import { inject } from "inversify";
import { CustomerService } from '../services/CustomerService';

@controller('/v1/customers')
export class CustomerController implements interfaces.Controller {

    constructor( @inject("CustomerService") private customerService: CustomerService ) {}

    @httpGet('/')
    async getAll(req: Request, res: Response) {
        try {
            const customers = await this.customerService.getAll();
            res.json(customers);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}
