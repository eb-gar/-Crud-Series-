import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeriesModule } from './series/series.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SeriesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
