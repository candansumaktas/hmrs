import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/cities"
  constructor(private httpClient: HttpClient) { }

  getCities():Observable<City>{
    return this.httpClient.get<City>(this.apiUrl+"/get/all");
  }
}
