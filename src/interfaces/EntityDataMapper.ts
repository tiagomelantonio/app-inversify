export interface EntityDataMapper<Domain, Entity> {

    toDomain(entity: Entity): Domain;

    toEntity(domain: Domain): Entity;
}
