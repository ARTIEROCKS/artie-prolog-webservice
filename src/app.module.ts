import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrologModule } from './prolog/prolog.module';

@Module({
  imports: [PrologModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
