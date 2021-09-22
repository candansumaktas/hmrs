import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';



@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/candidates"
 
  
  constructor(private httpClient: HttpClient) { }

   add(candidate: Candidate){
    return this.httpClient.post(this.apiUrl+"/add",candidate);
  }

  getCandidates():Observable<Candidate>{
    return this.httpClient.get<Candidate>(this.apiUrl+"/get/all");
  }
  
  checkCandidateNationalityIdExists(candidate: Candidate){
    return this.httpClient.get(this.apiUrl+"/exists/byNatId?nationalityId="+candidate.nationalityId);
  }

}
