import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Query,
  Post,
  Body,
} from '@nestjs/common';
import GetPedagogicalProgramByInstitutionIdUseCase from '../../application/usecases/pedagogicalPrograms/getPedagogicalProgramByInstitutionId.usecase';
import PedagogicalProgramCommand from 'src/application/commands/pedagogicalProgram.command';
import GetPrologQueryUseCase from 'src/application/usecases/pedagogicalPrograms/getPrologQuery.usecase';

@Controller('pedagogicalprogram')
export default class ProductController {
  constructor(
    private readonly getPedagogicalProgramByInstitutionIdUseCase: GetPedagogicalProgramByInstitutionIdUseCase,
    private readonly getPrologQueryUseCase: GetPrologQueryUseCase,
  ) {}

  //Function to get the pedagogical program in base of the query parameter
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

  //Function to query the pedagogical program in base of the query parameters
  @Post('/query')
  public async queryPedagogicalProgram(
    @Res() request,
    @Body() pedagogicalProgramCommand: PedagogicalProgramCommand,
  ): Promise<any> {
    const prologAnswers = await this.getPrologQueryUseCase.handler(
      pedagogicalProgramCommand,
    );
    return request.status(HttpStatus.OK).json(prologAnswers);
  }
}
