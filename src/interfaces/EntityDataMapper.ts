import { Request } from "express";

export interface EntityDataMapper<Domain, Entity> {

    toDomain(entity: Entity): Domain;

    toDalEntity(domain: Domain): Entity;

    requestToDomain(req: Request): Domain;
}
