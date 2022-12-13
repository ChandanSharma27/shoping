import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(value: any[], filterBy: string): any {
            if (filterBy) {
            return value.filter(product => {
                // return product.title === filterBy;
                return product.author.toLocaleLowerCase().indexOf(filterBy) !== -1;
                
            }) 
            
        }
        else {return value}
    }
}
