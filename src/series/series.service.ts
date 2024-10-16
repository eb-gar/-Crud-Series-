import { Injectable } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeriesService {
  constructor(private prisma: PrismaService) {}

  async create(createSeriesDto: CreateSeriesDto) {
    return this.prisma.series.create({
      data: createSeriesDto,
    });
  }

  async findAllAlive() {
    return this.prisma.series.findMany({
      where: { recommendation: true },
    });
  }

  async findAllRecommend() {
    return this.prisma.series.findMany({
      where: { recommendation: false },
    });
  }

  async findOne(id: number) {
    return this.prisma.series.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSeriesDto: UpdateSeriesDto) {
    return this.prisma.series.update({
      where: { id },
      data: updateSeriesDto,
    });
  }

  async remove(id: number) {
    return this.prisma.series.delete({
      where: { id },
    });
  }
}
