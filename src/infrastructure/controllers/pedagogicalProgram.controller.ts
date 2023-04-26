import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import GetPedagogicalProgramByInstitutionIdUseCase from '../../application/usecases/pedagogicalPrograms/getPedagogicalProgramByInstitutionId.usecase';

@Controller('products')
export default class ProductController {
  constructor(
    private readonly getPedagogicalProgramByInstitutionIdUseCase: GetPedagogicalProgramByInstitutionIdUseCase,
  ) {}

  @Get(':institutionId')
  public async getPedagogicalProgram(
    @Res() request,
    @Param('institutionId') institutionId: string,
  ): Promise<any> {
    const pedagogicalProgram =
      await this.getPedagogicalProgramByInstitutionIdUseCase.handler(
        institutionId,
      );
    return request.status(HttpStatus.OK).json(pedagogicalProgram);
  }
}
