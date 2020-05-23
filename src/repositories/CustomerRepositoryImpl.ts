import { injectable } from "inversify";
import { CustomerRepository } from "./CustomerRepository";
import { Repository as TypeOrmRepository, getConnection } from "typeorm";
import { EntityDataMapper } from "../interfaces/EntityDataMapper";
import { CustomerEntity } from "../entities/CustomerEntity";
import { Customer } from "../domain/Customer";
import { CustomerDataMapper } from "../mappers/CustomerDataMapper";
import { CustomerDTO } from "../dtos/CustomerDTO";

@injectable()
export class CustomerRepositoryImpl implements CustomerRepository {

    private readonly ormRepository: TypeOrmRepository<CustomerEntity>;
    private readonly dataMapper: EntityDataMapper<Customer, CustomerEntity, CustomerDTO>;

    public constructor() {
        this.ormRepository = getConnection('default').getRepository(CustomerEntity);
        this.dataMapper = new CustomerDataMapper();
    }

    async getAll(): Promise<Customer[]> {
        const entities = await this.ormRepository.find();
        return entities.map((entity) => this.dataMapper.entityToDomain(entity));
    }

    async getById(id: string): Promise<Customer> {
        const entity = await this.ormRepository.findOne(id);
        return this.dataMapper.entityToDomain(entity);
    }

    async insert(domain: Customer): Promise<boolean> {
        try {
            await this.ormRepository.insert(this.dataMapper.domainToEntity(domain));
        } catch (error) {
            throw new Error(error.message);
        }
        return true;
    }

    async update(id: string, domain: Customer): Promise<boolean> {
        try {
            await this.ormRepository.update(id, this.dataMapper.domainToEntity(domain));
        } catch (error) {
            return false;
        }
        return true;
    }

    async remove(id: string): Promise<void> {
        try {
            await this.ormRepository.delete(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
