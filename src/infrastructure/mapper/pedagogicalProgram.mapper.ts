import { Optional } from 'typescript-optional';
import PedagogicalProgram from '../../domain/models/pedagogicalProgram.model';
import { PedagogicalProgramEntity } from '../adapters/respository/pedagogicalPrograms/entity/pedagogicalProgram.entity';

export default class PedagogicalProgramMapper {
  public static toDomain(
    pedagogicalProgramEntity: PedagogicalProgramEntity,
  ): Optional<PedagogicalProgram> {
    if (!pedagogicalProgramEntity) {
      return Optional.empty<PedagogicalProgram>();
    }
    const pedagogicalProgram = new PedagogicalProgram(
      pedagogicalProgramEntity.id,
      pedagogicalProgramEntity.institutionId,
      pedagogicalProgramEntity.program,
    );
    return Optional.of(pedagogicalProgram);
  }

  public static toDomains(
    pedagogicalProgramsEntity: PedagogicalProgramEntity[],
  ): PedagogicalProgram[] {
    const pedagogicalPrograms = new Array<PedagogicalProgram>();
    pedagogicalProgramsEntity.forEach((pedagogicalProgramEntity) => {
      const pedagogicalProgram = this.toDomain(pedagogicalProgramEntity);
      pedagogicalPrograms.push(pedagogicalProgram.get());
    });
    return pedagogicalPrograms;
  }
}
