/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';
import PedagogicalProgram from '../../domain/models/pedagogicalProgram.model';
import PedagogicalProgramCommand from '../commands/pedagogicalProgram.command';

@Injectable()
export default class PedagogicalProgramFactory {
  public createPedagogicalProgram(
    pedagogicalProgramCommand: PedagogicalProgramCommand,
  ): PedagogicalProgram {
    return new PedagogicalProgram(
      '',
      pedagogicalProgramCommand.institutionId,
      pedagogicalProgramCommand.program,
    );
  }
}
