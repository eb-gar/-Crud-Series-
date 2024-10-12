import { Injectable } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeriesService {
  findAllExtinct() {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService){}
  create(createSeriesDto: CreateSeriesDto) {
    return 'This action adds a new series';
  }

  findAllAlive() {
    return this.prisma.series.findMany({
      where:{ rating: false},
    });
  }

  finAllExtinct(){
    return this.prisma.series.findMany({
      where:{ ratig: true},
    });
  }
  findOne(id: number) {
    return this.prisma.series.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSeriesDto: UpdateSeriesDto) {
    return `This action updates a #${id} series`;
  }

  remove(id: number) {
    return this.prisma.series.delete({
      where: { id },
    });
  }
}
