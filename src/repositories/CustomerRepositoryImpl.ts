import { injectable } from "inversify";
import { CustomerRepository } from "./CustomerRepository";
import { Repository as TypeOrmRepository, getConnection } from "typeorm";
import { EntityDataMapper } from "../interfaces/EntityDataMapper";
import { CustomerEntity } from "../entities/CustomerEntity";
import { Customer } from "../domain/Customer";
import { CustomerDataMapper } from "../mappers/CustomerDataMapper";

@injectable()
export class CustomerRepositoryImpl implements CustomerRepository {

    private readonly ormRepository: TypeOrmRepository<CustomerEntity>;
    private readonly dataMapper: EntityDataMapper<Customer, CustomerEntity>;

    public constructor() {
        this.ormRepository = getConnection('default').getRepository(CustomerEntity);
        this.dataMapper = new CustomerDataMapper();
    }

    async getAll(): Promise<Customer[]> {
        const entities = await this.ormRepository.find();
        return entities.map((entity) => this.dataMapper.toDomain(entity));
    }

    async getById(id: string): Promise<Customer> {
        const entity = await this.ormRepository.findOne(id);
        return this.dataMapper.toDomain(entity);
    }

    async insert(domain: Customer): Promise<void> {
        await this.ormRepository.insert(this.dataMapper.toEntity(domain));
    }

    async update(id: string, domain: Customer): Promise<void> {
        await this.ormRepository.update({ _id: id }, this.dataMapper.toEntity(domain));
    }

    async remove(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }
}
