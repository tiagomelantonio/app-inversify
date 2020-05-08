export interface Repository<T>{

    getAll(): Promise<T[]>;

    getById(id: string): Promise<T>;

    insert(domain: T): Promise<void>;

    update(id: string, domain: T): Promise<void>;

    remove(id: string): Promise<void>;
}
