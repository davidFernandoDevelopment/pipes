import { Pipe, PipeTransform } from '@angular/core';
import { IHeroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heros: IHeroe[], orderBy: string): IHeroe[] {

    switch (orderBy) {
      case 'name':
        return heros.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
      case 'fly':
        return heros.sort((a, b) => (a.fly > b.fly) ? -1 : 1);
      case 'color':
        return heros.sort((a, b) => (a.color > b.color) ? 1 : -1);
      default:
        return heros;
    }
  }

}
