import PedagogicalProgram from '../models/pedagogicalProgram.model';
import { Optional } from 'typescript-optional';

export interface PedagogicalProgramRepository {
  /**
   * Returns a pedagogical program filtered by institution ID
   * @param {string} institutionId
   * @returns a `PedagogicalProgram` object containing the data.
   */
  getPedagogicalProgramByInstitutionId(
    institutionId: string,
  ): Promise<Optional<PedagogicalProgram>>;
}
