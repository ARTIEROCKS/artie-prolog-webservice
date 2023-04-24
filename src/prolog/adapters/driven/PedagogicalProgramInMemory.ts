import { Injectable } from '@nestjs/common';
import { PedagogicalProgram } from '../../domain/model/PedagogicalProgram';
import { IPedagogicalProgramRepository } from '../../domain/outboundPorts/IPedagogicalProgramRepository';

/**
 * This is the implementation of output port, to store things in memory.
 */
@Injectable()
export class PedagogicalProgramInMemory
  implements IPedagogicalProgramRepository
{
  private readonly pedagogicalPrograms: PedagogicalProgram[] = [
    new PedagogicalProgram('ticket 1', '1'),
  ];
  findByInstitutionId(institutionId: string): PedagogicalProgram[] {
    return this.pedagogicalPrograms;
  }
}
