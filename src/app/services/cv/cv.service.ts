import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cv } from 'src/app/models/cv/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/cvs"

  constructor(private httpClient: HttpClient) { }

  add(cv: Cv){
    return this.httpClient.post(this.apiUrl+"/add",cv);
  }
}
