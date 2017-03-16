import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscoreToSpaces'
})
export class UnderscoreToSpacesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value !== 'string')
      return value;

    return value.replace(/_/g, " ");
  }

}
