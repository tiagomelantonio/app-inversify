import { createConnection } from 'typeorm';

export class Database {

    async start() {
        const connection = await createConnection();
        console.log('Database is connected');
    }
}
