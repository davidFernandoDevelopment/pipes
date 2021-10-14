import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'mymayuscula'
})
export class MayusculaPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    return value.slice(args[0], args[1]).toUpperCase();
  }
}
