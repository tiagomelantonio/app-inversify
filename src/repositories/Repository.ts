export interface Repository<T>{

    getAll(): Promise<T[]>;

    getById(id: string): Promise<T>

    insert(entity: T): Promise<void>

    update(entity: T): Promise<void>

    remove(id: string): Promise<void>
}
