import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/models/skill/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/skills"
  constructor(private httpClient: HttpClient) { }

  getSkill():Observable<Skill>{
    return this.httpClient.get<Skill>(this.apiUrl+"/get/all");
  }

}
