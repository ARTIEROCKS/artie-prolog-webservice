import { randomUUID } from 'crypto';

export class PedagogicalProgram {
  private id: string;
  institutionId: string;
  program: string;

  constructor(institutionId: string, program: string) {
    this.id = randomUUID();
    this.institutionId = institutionId;
    this.program = program;
  }
}
