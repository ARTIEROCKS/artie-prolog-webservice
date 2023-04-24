import { IsNotEmpty } from 'class-validator';

/**
 * PedagogicalProgramCommand
 * Used for CUD pedagogical program
 */
export class PedagogicalProgramCommand {
  @IsNotEmpty()
  institutionId: string;
  @IsNotEmpty()
  program: string;
}