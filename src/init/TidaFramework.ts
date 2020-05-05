import { HttpServer } from '../server';
import { Database } from '../db/Database';

export class TidaFramework {

    httpServer: HttpServer;
    database: Database

    constructor() {
        this.database = new Database();
        this.httpServer = new HttpServer();
    }

    async start() {
        console.log("Tida Framework is starting");

        await this.database.start();

        await this.httpServer.start();

        console.log("Tida Framework is up");
    }
}
