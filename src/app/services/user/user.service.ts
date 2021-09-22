import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/users"

  constructor(private httpClient: HttpClient) { }

  checkEmailExists(candidate: Candidate){
    return this.httpClient.get(this.apiUrl+"/exists/byEmail?email="+ candidate.email);
  }
  
  getLogin(user:User):Observable<User>{
    return this.httpClient.get<User>(this.apiUrl + "/login?email=" + user.email + "&password=" + user.password);
  }

}
