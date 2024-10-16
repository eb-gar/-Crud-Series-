import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateSeriesDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ required: false, default: true })
    @IsOptional()
    @IsBoolean()
    recommendation?: boolean;

    @ApiProperty()
    @IsNumber()
    year: number;

    @ApiProperty()
    @IsString()
    genre: string;

    @ApiProperty()
    @IsString()
    platform: string;
}