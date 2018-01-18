import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list:any, filterBy:string): any {
    return list.filter(i => i.title.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) > -1);
  }

}
