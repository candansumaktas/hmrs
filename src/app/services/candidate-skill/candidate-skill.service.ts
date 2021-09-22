import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidateSkill } from 'src/app/models/candicated/candidate-skill/candidate-skill';

@Injectable({
  providedIn: 'root'
})
export class CandidateSkillService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSkills"
  constructor(private httpClient: HttpClient) { }

  add(candidateSkill: CandidateSkill){
    return this.httpClient.post(this.apiUrl+"/add",candidateSkill);
  }
}
