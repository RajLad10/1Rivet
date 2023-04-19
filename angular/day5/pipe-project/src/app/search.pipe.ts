import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: any[], textSearch: string): any[] {
    
    if(!employees) return [];
    if(!textSearch) return employees;

    textSearch = textSearch.toLowerCase();
    return employees.filter(employee => {
      return employee.name.toLowerCase().includes(textSearch);
    })
  }

}
