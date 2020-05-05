import { injectable } from "inversify";
import { CustomerRepository } from "./CustomerRepository";
import { Repository as TypeOrmRepository, getConnection } from "typeorm";
import { EntityDataMapper } from "../interfaces/EntityDataMapper";
import { CustomerEntity } from "../entities/CustomerEntity";
import { Customer } from "../domain/Customer";
import { CustomerDataMapper } from "../mappers/CustomerDataMapper";

@injectable()
export class CustomerRepositoryImpl implements CustomerRepository {

    private readonly _repository: TypeOrmRepository<CustomerEntity>;
    private readonly _dataMapper: EntityDataMapper<Customer, CustomerEntity>;

    public constructor() {
        this._repository = getConnection('default').getRepository(CustomerEntity);
        this._dataMapper = new CustomerDataMapper();
    }

    async getAll(): Promise<Customer[]> {
        const entities = await this._repository.find();
        return entities.map((e) => this._dataMapper.toDomain(e));
    }

    getById(id: string): Promise<Customer> {
        throw new Error("Method not implemented." + id);
    }

    insert(entity: Customer): Promise<void> {
        throw new Error("Method not implemented." + entity);
    }

    update(entity: Customer): Promise<void> {
        throw new Error("Method not implemented." + entity);
    }

    remove(id: string): Promise<void> {
        throw new Error("Method not implemented." + id);
    }
}
