import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent  {

  @Output() priceRangeChanged=new EventEmitter<any>();

  onChange(value:any ){
    console.log('####range'+value);
    this.priceRangeChanged.emit(value);
    }


}
