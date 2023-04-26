import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainModule } from 'src/domain/domain.module';
import ProductRepositoryMongo from '../infrastructure/adapters/repository/products/product.repository.mongo';
import PedagogicalProgramRepositoryMongo from 'src/infrastructure/adapters/repository/pedagogicalPrograms/pedagogicalProgram.repository.mongo';
import ProductSchema from '../infrastructure/adapters/repository/products/schema/product.schema';
import PedagogicalProgramSchema from 'src/infrastructure/adapters/repository/pedagogicalPrograms/schema/pedagogicalProgram.schema';
import ProductFactory from './factory/product.factory';
import PedagogicalProgramFactory from './factory/pedagogicalProgram.factory';
import { PRODUCTS_USECASES } from './usecases/products';
import { PEDAGOGICAL_PROGRAMS_USECASES } from './usecases/pedagogicalPrograms';

@Module({
  imports: [
    DomainModule,
    MongooseModule.forFeature([
      {
        name: 'Product',
        schema: ProductSchema,
      },
      {
        name: 'PedagogicalProgram',
        schema: PedagogicalProgramSchema,
      },
    ]),
  ],
  providers: [
    ProductFactory,
    PedagogicalProgramFactory,
    ...PRODUCTS_USECASES,
    ...PEDAGOGICAL_PROGRAMS_USECASES,
    { provide: 'ProductRepository', useClass: ProductRepositoryMongo },
    {
      provide: 'PedagogicalProgramRepository',
      useClass: PedagogicalProgramRepositoryMongo,
    },
  ],
  exports: [
    ProductFactory,
    PedagogicalProgramFactory,
    ...PRODUCTS_USECASES,
    ...PEDAGOGICAL_PROGRAMS_USECASES,
  ],
})
export class ApplicationModule {}
