export interface Repository<T>{

    getAll(): Promise<T[]>;

    getById(id: string): Promise<T>;

    insert(domain: T): Promise<boolean>;

    update(id: string, domain: T): Promise<boolean>;

    remove(id: string): Promise<void>;
}
