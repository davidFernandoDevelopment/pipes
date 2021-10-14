import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
  transform(fly: boolean): string {
    return fly ? 'Sí, vuela' : 'No, vuela';
  }
}
