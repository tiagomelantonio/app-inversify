import { HttpServer } from '../server';
import { Database } from '../db/Database';

export class AppInversify {

    httpServer: HttpServer;
    database: Database

    constructor() {
        this.database = new Database();
        this.httpServer = new HttpServer();
    }

    async start() {
        await this.database.start();

        await this.httpServer.start();
    }
}
