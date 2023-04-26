export default class PedagogicalProgramModel {
  private id?: string;
  private readonly institutionId: string;
  private readonly program: string;

  constructor(id: string, institutionId: string, program: string) {
    this.id = id;
    this.institutionId = institutionId;
    this.program = program;
  }

  public getId(): string {
    return this.id;
  }

  public getInstitutionId(): string {
    return this.institutionId;
  }

  public getProgram(): string {
    return this.program;
  }
}
