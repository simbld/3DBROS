import { PipeTransform, BadRequestException } from "@nestjs/common";

export class MonthValidationPipe implements PipeTransform<string, number> {
  /**
   * Transforms a string into a valid month (number).
   * @param {string} value - The input string to transform.
   * @returns {number} - The parsed month as a number.
   * @throws {BadRequestException} - If the input is not a valid month.
   */
  transform(value: string): number {
    const month = parseInt(value, 10);
    if (isNaN(month) || month < 1 || month > 12) {
      throw new BadRequestException(`Invalid month: ${value}`);
    }
    return month;
  }
}
