import * as express from 'express';
import { injectable } from 'inversify';

@injectable()
export abstract class BaseController {

    public static jsonResponse(
        res: express.Response, code: number, message: string
    ) {
        return res.status(code).json({ message })
    }

    public httpOk<T>(res: express.Response, dto?: T) {
        if (dto) {
            res.type('application/json');
            return res.status(200).json(dto);
        } else {
            return res.sendStatus(200);
        }
    }

    public httpCreated(res: express.Response) {
        return res.sendStatus(201);
    }

    public clientError(res: express.Response, message?: string) {
        return BaseController.jsonResponse(res, 400, message ? message : 'Unauthorized');
    }

    public httpUnauthorized(res: express.Response, message?: string) {
        return BaseController.jsonResponse(res, 401, message ? message : 'Unauthorized');
    }

    public httpPaymentRequired(res: express.Response, message?: string) {
        return BaseController.jsonResponse(res, 402, message ? message : 'Payment required');
    }

    public httpForbidden(res: express.Response, message?: string) {
        return BaseController.jsonResponse(res, 403, message ? message : 'Forbidden');
    }

    public httpNotFound(res: express.Response, message?: string) {
        return BaseController.jsonResponse(res, 404, message ? message : 'Not found');
    }

    public httpConflict(res: express.Response, message?: string) {
        return BaseController.jsonResponse(res, 409, message ? message : 'Conflict');
    }

    public httpTooMany(res: express.Response, message?: string) {
        return BaseController.jsonResponse(res, 429, message ? message : 'Too many requests');
    }

    public todo(res: express.Response) {
        return BaseController.jsonResponse(res, 400, 'TODO');
    }

    public httpFail(res: express.Response, error: Error | string) {
        console.log(error);
        return res.status(500).json({
            message: error.toString()
        })
    }
}
