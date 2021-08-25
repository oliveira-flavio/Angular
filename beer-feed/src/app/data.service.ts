import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getBeer() {
    return this.httpClient.get(`https://api.punkapi.com/v2/beers`);
  }
}


