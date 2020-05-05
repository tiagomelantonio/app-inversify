import { Request, Response } from 'express';
import { controller, httpGet, BaseHttpController } from "inversify-express-utils";
const pkg = require('../../package.json');

@controller('/check')
export class HealthCkeckController extends BaseHttpController {

    @httpGet('/version')
    getVersion(req: Request, res: Response) {
        res.json({
            applicationName: pkg.name
        })
    }

    @httpGet('/status')
    getStatus(req: Request, res: Response) {
        res.json({
            status: "ok"
        })
    }

    @httpGet('/status/complete')
    getStatusComplete(req: Request, res: Response) {

    }
}
