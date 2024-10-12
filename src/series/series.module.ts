import { Module } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SeriesController],
  providers: [SeriesService],
  imports: [PrismaModule],
})
export class SeriesModule {}
