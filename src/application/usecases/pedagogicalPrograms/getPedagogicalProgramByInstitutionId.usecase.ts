import { Injectable, Inject } from '@nestjs/common';
import PedagogicalProgram from '../../../domain/models/pedagogicalProgram.model';
import { PedagogicalProgramRepository } from '../../../domain/ports/pedagogicalProgram.repository';
import { Optional } from 'typescript-optional';

@Injectable()
export default class GetPedagogicalProgramByInstitutionIdUseCase {
  constructor(
    @Inject('PedagogicalProgramRepository')
    private pedagogicalProgramRepository: PedagogicalProgramRepository,
  ) {}

  public handler(institutionId: string): Promise<Optional<PedagogicalProgram>> {
    return this.pedagogicalProgramRepository.getPedagogicalProgramByInstitutionId(
      institutionId,
    );
  }
}
