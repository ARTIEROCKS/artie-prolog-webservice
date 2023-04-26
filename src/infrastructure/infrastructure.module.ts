import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationModule } from '../application/application.module';
import ProductSchema from './adapters/repository/products/schema/product.schema';
import PedagogicalProgramSchema from './adapters/repository/pedagogicalPrograms/schema/pedagogicalProgram.schema';
import ProductController from './controllers/product.controller';
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
      { name: 'Product', schema: ProductSchema },
      { name: 'PedagogicalProgran', schema: PedagogicalProgramSchema },
    ]),
  ],
  controllers: [ProductController, PedagogicalProgramController],
})
export class InfrastructureModule {}
