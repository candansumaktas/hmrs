import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from 'src/app/models/employer/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

 apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/employers"
  constructor(private httpClient: HttpClient) { }

  add(employer: Employer){
    return this.httpClient.post(this.apiUrl+"/add",employer);
  }

  getEmployer():Observable<Employer>{
    return this.httpClient.get<Employer>(this.apiUrl+"/get/all");
  }

  // getEmployerValue(employer:Employer){
  //   return this.httpClient.get(this.apiUrl + "/get/byEmailAndPW?email=" + employer.email + "&password=");
  // }

  
}
