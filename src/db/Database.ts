import { createConnection } from 'typeorm';

export class Database {

    async start() {
        await createConnection();
        console.log('Database is connected');
    }
}
