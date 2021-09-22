import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidateSchool } from 'src/app/models/candicated/candidate-school/candidate-school';

@Injectable({
  providedIn: 'root'
})
export class CandidateSchoolService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools"
  constructor(private httpClient: HttpClient) { }

  add(candidateSchool: CandidateSchool){
    return this.httpClient.post(this.apiUrl+"/add",candidateSchool);
  }
}
