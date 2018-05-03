import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-final-test',
  templateUrl: './final-test.component.html',
  styleUrls: ['./final-test.component.css']
  
})
export class FinalTestComponent  {

  constructor() { }
  onSubmit = function (user) {
    console.log('########################'+ user);
  

// var body = "firstname=" + user.firstname + "&lastname=" + user.lastname + "&name=" + user.name;
    // this.http.post("http://www.testtttt.com", body).subscribe((data) => {});

  }

}
