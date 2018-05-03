// import { Pipe, PipeTransform } from '@angular/core';

// import { Book } from './flight';
// @Pipe({
//   name: 'Searchfilter',
//   pure: false
// })
// export class SearchFilterPipe implements PipeTransform {
//  transform(items:any, cmpSearch:any, arrLocSearch:any, deptLocSearch:any):any {
//   //transform(items: Array, cmpSearch: string, arrLocSearch: string, deptLocSearch: string){
//     if (items && items.length){
//         return items.filter(item =>{
//             if (cmpSearch && item.title.toLowerCase().indexOf(cmpSearch.toLowerCase()) === -1){
//                 return false;
//             }
//             if (arrLocSearch && item.arrvLocation.toLowerCase().indexOf(arrLocSearch.toLowerCase()) === -1){
//                 return false;
//             }
//             if (deptLocSearch && item.deptLocation.toLowerCase().indexOf(deptLocSearch.toLowerCase()) === -1){
//                 return false;
//             }
         
//             return true;
//        })
//     }
//     else{
//         return items;
//     }
// }
// }
