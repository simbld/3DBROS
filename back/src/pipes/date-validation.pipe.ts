import { PipeTransform, BadRequestException } from "@nestjs/common";

export class DateValidationPipe implements PipeTransform<string, Date> {
  /**
   * Transforms a string into a valid Date object.
   * @param {string} value - The input string to transform.
   * @returns {Date} - The parsed Date object.
   * @throws {BadRequestException} - If the input is not a valid date.
   */
  transform(value: string): Date {
    const parsedDate = new Date(value);

    if (isNaN(parsedDate.getTime())) {
      throw new BadRequestException(`Invalid date format: ${value}`);
    }

    return parsedDate;
  }
}
