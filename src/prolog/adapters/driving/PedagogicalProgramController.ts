import { Controller, Get, Query, Logger } from '@nestjs/common';
import { PedagogicalProgramService } from '../../domain/inboundPorts/PedagogicalProgramService';

@Controller('program')
export class PedagogicalProgramController {
  private readonly logger = new Logger(PedagogicalProgramController.name);

  constructor(private pedagogicalProgramService: PedagogicalProgramService) {}

  @Get()
  findByInstitutionId(@Query('institutionId') institutionId: string): any[] {
    return this.pedagogicalProgramService.findByInstitutionId(institutionId);
  }
}
