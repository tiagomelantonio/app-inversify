import { Response } from 'express';
import { interfaces, controller, httpGet, httpPost, httpDelete, requestParam, response, requestBody, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import { CustomerService } from '../services/CustomerService';
import { CustomerDTO } from '../dtos/CustomerDTO';
import { BaseController } from './BaseController';
import { ICustomerDataMapper } from '../mappers/ICustomerDataMapper';

@controller('/v1/customers')
export class CustomerController extends BaseController implements interfaces.Controller {

    constructor(
        @inject("CustomerService") private customerService: CustomerService,
        @inject("ICustomerDataMapper") private customerDataMapper: ICustomerDataMapper) {
        super();
    }

    @httpGet('/')
    async getAll(@response() res: Response) {
        try {
            const dtos = this.customerDataMapper.domainToDTO(await this.customerService.getAll());
            this.httpOk(res, dtos);
        } catch (error) {
            this.httpFail(res, error.message);
        }
    }

    @httpGet('/:id')
    async getById(@requestParam("id") id: string, @response() res: Response) {
        try {
            const dto = this.customerDataMapper.domainToDTO(await this.customerService.getById(id));
            this.httpOk(res, dto);
        } catch (error) {
            this.httpFail(res, error.message);
        }
    }

    @httpPost('/')
    async insert(@requestBody() dto: CustomerDTO, @response() res: Response) {
        try {
            await this.customerService.insert(this.customerDataMapper.dtoToDomain(dto));
            this.httpCreated(res);
        } catch (error) {
            this.httpFail(res, error.message);
        }
    }

    @httpPut('/:id')
    async update(@requestParam() id: string, @requestBody() dto: CustomerDTO, @response() res: Response) {
        try {
            await this.customerService.update(id, this.customerDataMapper.dtoToDomain(dto));
            this.httpOk(res);
        } catch (error) {
            this.httpFail(res, error.message);
        }
    }

    @httpDelete('/:id')
    async remove(@requestParam() id: string, @response() res: Response) {
        try {
            await this.customerService.remove(id);
            this.httpOk(res);
        } catch (error) {
            this.httpFail(res, error.message);
        }
    }
}
