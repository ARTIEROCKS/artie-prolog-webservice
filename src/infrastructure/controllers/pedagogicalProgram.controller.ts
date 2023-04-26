import { Controller, Get, Res, HttpStatus, Query } from '@nestjs/common';
import GetPedagogicalProgramByInstitutionIdUseCase from '../../application/usecases/pedagogicalPrograms/getPedagogicalProgramByInstitutionId.usecase';

@Controller('pedagogicalprogram')
export default class ProductController {
  constructor(
    private readonly getPedagogicalProgramByInstitutionIdUseCase: GetPedagogicalProgramByInstitutionIdUseCase,
  ) {}

  @Get()
  public async getPedagogicalProgram(
    @Res() request,
    @Query('institutionId') institutionId: string,
  ): Promise<any> {
    const pedagogicalProgram =
      await this.getPedagogicalProgramByInstitutionIdUseCase.handler(
        institutionId,
      );
    return request.status(HttpStatus.OK).json(pedagogicalProgram);
  }
}
