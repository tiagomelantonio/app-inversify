import { Response } from 'express';
import { controller, httpGet, BaseHttpController, response } from "inversify-express-utils";
const pkg = require('../../package.json');

@controller('/v1/check')
export class HealthCkeckController extends BaseHttpController {

    @httpGet('/version')
    getVersion(@response() res: Response) {
        res.json({
            applicationName: pkg.name,
            version: pkg.version
        })
    }

    @httpGet('/status')
    getStatus(@response() res: Response) {
        res.json({
            status: "ok"
        })
    }
}
