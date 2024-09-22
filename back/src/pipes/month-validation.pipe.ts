import { PipeTransform, BadRequestException } from "@nestjs/common";

export class MonthValidationPipe implements PipeTransform {
  transform(value: string): number {
    const month = parseInt(value, 10);
    if (isNaN(month) || month < 1 || month > 12) {
      throw new BadRequestException(`Invalid month: ${value}`);
    }
    return month;
  }
}
