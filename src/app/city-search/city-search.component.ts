import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']

})
export class CitySearchComponent  {

  @Output() cityOneChanged=new EventEmitter<string>();
  @Output() cityTwoChanged=new EventEmitter<string>();
  @Output() arrvDateChanged=new EventEmitter<string>();
  

onChange(value:string ){
  console.log('@@@@@@@@@'+value);
  this.cityOneChanged.emit(value);
  
  }
onChange1(value:string ){
    console.log('####'+value);
    this.cityTwoChanged.emit(value);
    }

    onDatechange(value:string ){
      console.log('####Dateeee'+value);
      this.arrvDateChanged.emit(value);
      }
 
      
     
}
