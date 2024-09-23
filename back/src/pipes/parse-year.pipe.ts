import { PipeTransform, Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class ParseYearPipe implements PipeTransform {
  transform(value: string): number {
    const year = parseInt(value, 10);
    if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
      throw new BadRequestException("Invalid year format");
    }
    return year;
  }
}
