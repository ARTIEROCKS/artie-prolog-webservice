import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationModule } from '../application/application.module';
import PedagogicalProgramSchema from './adapters/repository/pedagogicalPrograms/schema/pedagogicalProgram.schema';
import PedagogicalProgramController from './controllers/pedagogicalProgram.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Configuration } from '../config/env.enum';

@Module({
  imports: [
    ApplicationModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: `${configService.get(Configuration.MONGO_CONNECTION_STRING)}`,
      }),
    }),
    MongooseModule.forFeature([
      { name: 'PedagogicalProgram', schema: PedagogicalProgramSchema },
    ]),
  ],
  controllers: [PedagogicalProgramController],
})
export class InfrastructureModule {}
