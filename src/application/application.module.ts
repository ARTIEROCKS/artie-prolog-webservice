import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainModule } from 'src/domain/domain.module';
import PedagogicalProgramRepositoryMongo from 'src/infrastructure/adapters/repository/pedagogicalPrograms/pedagogicalProgram.repository.mongo';
import PedagogicalProgramSchema from 'src/infrastructure/adapters/repository/pedagogicalPrograms/schema/pedagogicalProgram.schema';
import PedagogicalProgramFactory from './factory/pedagogicalProgram.factory';
import { PEDAGOGICAL_PROGRAMS_USECASES } from './usecases/pedagogicalPrograms';

@Module({
  imports: [
    DomainModule,
    MongooseModule.forFeature([
      {
        name: 'PedagogicalProgram',
        schema: PedagogicalProgramSchema,
      },
    ]),
  ],
  providers: [
    PedagogicalProgramFactory,
    ...PEDAGOGICAL_PROGRAMS_USECASES,
    {
      provide: 'PedagogicalProgramRepository',
      useClass: PedagogicalProgramRepositoryMongo,
    },
  ],
  exports: [PedagogicalProgramFactory, ...PEDAGOGICAL_PROGRAMS_USECASES],
})
export class ApplicationModule {}
