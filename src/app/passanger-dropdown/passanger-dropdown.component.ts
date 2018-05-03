import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passanger-dropdown',
  templateUrl: './passanger-dropdown.component.html',
  styleUrls: ['./passanger-dropdown.component.css']
})
export class PassangerDropdownComponent {

//  displayMessage = "Sort by...";
//   sortOptions = ["Balance", "Company", "Last Name"]
  
//    changeMessage(selectedItem: string){
//     this.displayMessage = "Sort by " + selectedItem;
//   }


public passangers = [
  { value: 'one', display: '1' },
  { value: 'two', display: '2' },
  { value: 'three', display: '3' }
];

}
