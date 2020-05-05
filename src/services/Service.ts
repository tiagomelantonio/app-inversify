export interface Service<T> {

    getAll(): Promise<T[]>;

    getById(id: string): Promise<T>

    insert(model: T): Promise<void>

    update(model: T): Promise<void>

    remove(id: string): Promise<void>
}
