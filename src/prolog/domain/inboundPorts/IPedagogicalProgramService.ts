import { PedagogicalProgram } from '../model/PedagogicalProgram';

/**
 * Our domain input port
 */

export interface IPedagogicalProgramService {
  findByInstitutionId(institutionId: string): PedagogicalProgram[];
}
