import { createConnection } from 'typeorm';

export class Database {

    async start() {
        try {
            await createConnection();
            console.log('Database is up');
        } catch (error) {
            console.log(error.message);   
        }
    }
}
