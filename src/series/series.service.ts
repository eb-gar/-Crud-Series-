import { Injectable } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeriesService {
  constructor(private prisma: PrismaService) {}

  create(createSeriesDto: CreateSeriesDto) {
    return this.prisma.series.findUnique;
  }

  findAllAlive() {
    return this.prisma.series.findMany({
      where: { recommendation: true }, 
    });
  }

  findAllRecommend() { 
    return this.prisma.series.findMany({
      where: { recommendation: false }, 
    });
  }

  findOne(id: number) {
    return this.prisma.series.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSeriesDto: UpdateSeriesDto) {
    return this.prisma.series.findUnique;
  }

  remove(id: number) {
    return this.prisma.series.delete({
      where: { id },
    });
  }
}
