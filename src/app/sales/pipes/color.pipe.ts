import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {
  transform(codColor: number): string {
    const colors: string[] = ['rojo', 'negro', 'azul', 'verde'];
    return colors[codColor];
  }
}
