import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidateLanguage } from 'src/app/models/candicated/candidate-language/candidate-language';

@Injectable({
  providedIn: 'root'
})
export class CandidateLanguageService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/candidateLanguages"
  constructor(private httpClient: HttpClient) { }

  add(candidateLanguage: CandidateLanguage){
    return this.httpClient.post(this.apiUrl+"/add",candidateLanguage);
  }

}
