import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from 'src/app/models/school/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/schools"
  constructor(private httpClient: HttpClient) { }

  getSchool():Observable<School[]>{
    return this.httpClient.get<School[]>(this.apiUrl+"/get/all");
  }
}
