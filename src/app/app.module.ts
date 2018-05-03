import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { PassangerDropdownComponent } from './passanger-dropdown/passanger-dropdown.component';
import { FinalTestComponent } from './final-test/final-test.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { TabComponent } from './tab/tab.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { LocationSearchPipe } from './location-search.pipe';
import { RangeSliderComponent } from './range-slider/range-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    DatePickerComponent,
    PassangerDropdownComponent,
    FinalTestComponent,
    CitySearchComponent,
    TabComponent,
    SearchFilterPipe,
    LocationSearchPipe,
    RangeSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModule.forRoot()
  ],
  providers: [],
  // bootstrap: [FinalTestComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
