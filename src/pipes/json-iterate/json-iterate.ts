import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the JsonIteratePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'jsonIterate',
})
export class JsonIteratePipe implements PipeTransform {
  transform(value: object, ...args) {
    console.log(value);
    let array = [];
    for (let x in value) {
      array.push({
        key: x,
        value: value[x]
      });
    }
    return array;
  }
}
