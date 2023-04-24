import { Inject, Injectable } from '@nestjs/common';
import { PedagogicalProgram } from '../model/PedagogicalProgram';
import { IPedagogicalProgramRepository } from '../outboundPorts/IPedagogicalProgramRepository';
import { IPedagogicalProgramService } from './IPedagogicalProgramService';

/**
 * The implementation of the inbound port IPedagogicalProgramService.
 */
@Injectable()
export class PedagogicalProgramService implements IPedagogicalProgramService {
  constructor(
    @Inject(IPedagogicalProgramRepository)
    private readonly pedagogicalProgramRepository: IPedagogicalProgramRepository,
  ) {}

  findByInstitutionId(institutionId: string): PedagogicalProgram[] {
    return null;
  }
}
