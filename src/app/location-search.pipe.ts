import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationSearch'
})
export class LocationSearchPipe implements PipeTransform {

  transform(myData: any, arrLoc: any): any {
    
    if (arrLoc===undefined) return myData;

    return myData.filter(function(d){

        return d.arrvLocation.toLowerCase().includes(arrLoc.toLowerCase());

    })
  }


}
