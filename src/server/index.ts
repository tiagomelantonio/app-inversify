import "reflect-metadata";
import bodyParser from 'body-parser';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

export class HttpServer {

    container: Container;

    constructor() {
        this.container = new Container();
    }

    async start() {
        const server = new InversifyExpressServer(this.container);
        server.setConfig((app) => {
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use(bodyParser.json());
        });

        const app = server.build();
        app.listen(8081);
        console.log('HttpServer is up');

    }
}
