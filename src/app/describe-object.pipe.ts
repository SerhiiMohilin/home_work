import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'describeObject',
  standalone: true,
})
export class DescribeObjectPipe implements PipeTransform {
  transform(obj: Record<string, unknown>, separator = ", "): unknown {
    let result = '';

    for (const key in obj) {
      const value = obj[key];

      if (typeof value !== 'object') {
        result += `${key}: ${value}${separator}`;
      }
    }

    return result;
  }
}