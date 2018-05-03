import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'Searchfilter'
})
export class SearchFilterPipe implements PipeTransform {
  
   transform(items:any, originCity:any, destinationCity:any, arrLocSearch:any,  arrvDate:any, priceRange:any):any {
 // transform(items: Array, cmpSearch: string, arrLocSearch: string, deptLocSearch: string, arrvDate: number){
    if (items && items.length){
        return items.filter(item =>{
            if (originCity && item.arrvLocation.toLowerCase().indexOf(originCity.toLowerCase()) === -1){
                return false;
            }
            if (destinationCity && item.deptLocation.toLowerCase().indexOf(destinationCity.toLowerCase()) === -1){
                return false;
            }
            if (arrLocSearch && item.arrvLocation.toLowerCase().indexOf(arrLocSearch.toLowerCase()) === -1){
                return false;
            }
           

            if (arrvDate && item.arriveDate.toLowerCase().indexOf(arrvDate.toLowerCase()) === -1 ){
              
              return false;
            }
            if (priceRange && item.fare.toLowerCase().indexOf(priceRange.toLowerCase()) === -1 ){
                
                return false;
              }
         
            return true;
       })
    }
    else{
        return items;
    }
}
}
