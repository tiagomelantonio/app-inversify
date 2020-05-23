export interface EntityDataMapper<Domain, Entity, DTO> {

    entityToDomain(entity: Entity): Domain;

    domainToEntity(domain: Domain): Entity;

    dtoToDomain(dto: DTO): Domain;

    domainToDTO(domain: Domain | Domain[]): DTO | DTO[];
}
