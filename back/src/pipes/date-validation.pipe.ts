import { PipeTransform, BadRequestException } from "@nestjs/common";

export class DateValidationPipe implements PipeTransform {
  transform(value: string): Date {
    const parsedDate = new Date(value);

    if (isNaN(parsedDate.getTime())) {
      throw new BadRequestException(`Invalid date format: ${value}`);
    }

    return parsedDate;
  }
}
