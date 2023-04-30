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
      const dto = this.transformAnswerToDTOArray(answer);
      results.push(dto);
    }

    //We create the optional results and return them in a promise
    const optionalResults: Optional<string[]> = Optional.ofNullable(results);
    return optionalResults;
  }

  /**
   * Function to transform the prolog answer into a dto
   * @param answer Answer received from the prolog query
   * @returns a dto array with the different variables and values
   */
  private transformAnswerToDTOArray(answer: any): any {
    const dtoArray = [];

    for (const key in answer.links) {
      if (answer.links.hasOwnProperty(key)) {
        dtoArray.push({
          variable: key,
          value: answer.links[key].id,
        });
      }
    }

    return dtoArray;
  }
}
