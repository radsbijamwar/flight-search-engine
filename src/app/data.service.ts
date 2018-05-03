import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getFlights() {
    return this.http.get('../assets/flightData.json')
    .map((res:Response) => res.json());

    
  }
}
