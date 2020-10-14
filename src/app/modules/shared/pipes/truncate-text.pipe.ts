import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value && value.length > 23)
      return `${value.substring(0, 23)}...`;
    return 'NO TEXT';
  }

}
