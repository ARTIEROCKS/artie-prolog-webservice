import { Module } from '@nestjs/common';
import { PedagogicalProgramController } from './adapters/driving/PedagogicalProgramController';
import { PedagogicalProgramService } from './domain/inboundPorts/PedagogicalProgramService';
import { IPedagogicalProgramRepository } from './domain/outboundPorts/IPedagogicalProgramRepository';
import { PedagogicalProgramInMemory } from './adapters/driven/PedagogicalProgramInMemory';

@Module({
  imports: [],
  controllers: [PedagogicalProgramController],
  providers: [
    PedagogicalProgramService,
    {
      provide: IPedagogicalProgramRepository,
      useClass: PedagogicalProgramInMemory,
    },
  ],
})
export class PrologModule {}
