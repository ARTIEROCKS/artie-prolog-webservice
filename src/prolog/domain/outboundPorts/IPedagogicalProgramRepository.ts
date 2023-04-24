import { PedagogicalProgram } from '../model/PedagogicalProgram';

/**
 * Interface for PedagogicalProgram Repository, outbound port
 */
export interface IPedagogicalProgramRepository {
  findByInstitutionId(institutionId: string): PedagogicalProgram[];
}

export const IPedagogicalProgramRepository = Symbol(
  'IPedagogicalProgramRepository',
);
