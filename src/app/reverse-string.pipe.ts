import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
  standalone: true,
})
export class ReverseStringPipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value !== 'string') return '';
    return value.split('').reverse().join('');
  }
}