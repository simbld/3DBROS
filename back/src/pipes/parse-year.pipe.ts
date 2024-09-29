import { PipeTransform, Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class ParseYearPipe implements PipeTransform<string, number> {
  /**
   * Transforms a string into a valid year (number)
   * @param {string} value - The input string to transform.
   * @returns {number} - The parsed year as a number.
   * @throws {BadRequestException} - If the input is not a valid year.
   */
  transform(value: string): number {
    const year = parseInt(value, 10);
    const currentYear = new Date().getFullYear();

    if (isNaN(year) || year < 1900 || year > currentYear) {
      throw new BadRequestException("Invalid year format");
    }

    return year;
  }
}
