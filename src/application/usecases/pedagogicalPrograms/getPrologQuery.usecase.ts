import { Injectable, Inject } from '@nestjs/common';
import { PedagogicalProgramRepository } from '../../../domain/ports/pedagogicalProgram.repository';
import { Optional } from 'typescript-optional';
import * as pl from 'tau-prolog';
import PedagogicalProgramCommand from 'src/application/commands/pedagogicalProgram.command';

@Injectable()
export default class GetPrologQueryUseCase {
  constructor(
    @Inject('PedagogicalProgramRepository')
    private pedagogicalProgramRepository: PedagogicalProgramRepository,
  ) {}

  public async handler(
    pedagogicalProgramCommand: PedagogicalProgramCommand,
  ): Promise<Optional<string[]>> {
    //we first look for the pedagogical program of the insititution
    const pedagogicalProgram =
      await this.pedagogicalProgramRepository.getPedagogicalProgramByInstitutionId(
        pedagogicalProgramCommand.institutionId,
      );

    //We create the session and query the pedagogical program
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tau-prolog/modules/promises.js')(pl);
    const results: string[] = [];
    const session = pl.create();

    await session.promiseConsult(pedagogicalProgram.get().getProgram());
    await session.promiseQuery(pedagogicalProgramCommand.query);

    //We get different answers from the program
    for await (const answer of session.promiseAnswers()) {
      results.push(answer);
    }

    //We create the optional results and return them in a promise
    const optionalResults: Optional<string[]> = Optional.ofNullable(results);
    return optionalResults;
  }
}
