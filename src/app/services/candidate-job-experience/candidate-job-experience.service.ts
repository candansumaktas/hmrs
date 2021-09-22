import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateJobExperience } from 'src/app/models/candicated/candidate-job-experience/candidate-job-experience';

@Injectable({
  providedIn: 'root'
})
export class CandidateJobExperienceService {
 apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/candidateJobExperiences"
  constructor(private httpClient: HttpClient) { }

  getCandidateJobExperience():Observable<CandidateJobExperience>{
    return this.httpClient.get<CandidateJobExperience>(this.apiUrl+"/get/all");
  }

  add(candidateJobExperience: CandidateJobExperience){
    return this.httpClient.post(this.apiUrl+"/add",candidateJobExperience);
  }
}
