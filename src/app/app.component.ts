import { Component, Input } from '@angular/core';
import {DataService} from './data.service';
import { SearchFilterPipe } from './search-filter.pipe';
import {CitySearchComponent} from  './city-search/city-search.component';
import {RangeSliderComponent} from './range-slider/range-slider.component';
// import {DatePickerComponent} from './date-picker/date-picker.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  originCity="";
    myData: Array<any>;
  
    constructor(private dataService: DataService) {
     
      this.dataService.getFlights().subscribe(data => this.myData = data);

        
    }

    
}
