import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/models/language/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/languages"
  constructor(private httpClient: HttpClient) { }

  getLanguages():Observable<Language[]>{

    return this.httpClient.get<Language[]>(this.apiUrl+"/get/all");
  }

}
