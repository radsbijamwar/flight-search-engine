import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  myData: Array<any>;
  
    constructor(private http:Http) {
      
      // this.http.get('https://jsonplaceholder.typicode.com/posts')

       this.http.get('../../assets/flightData.json')
        .map(response => response.json())
        .subscribe(res => this.myData = res);

        
    }

    // this.http.get('app/data/books.json')
    //     .map(res => res.json().data)
    //     .catch(res => console.log(res));
    // }
  



  ngOnInit() {
  }

}
