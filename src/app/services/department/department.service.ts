import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/department/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/departments"
  constructor(private httpClient: HttpClient) { }

  add(department: Department){
    return this.httpClient.post(this.apiUrl+"/add",department);
  }

  getDepartment():Observable<Department>{
    return this.httpClient.get<Department>(this.apiUrl+"/get/all");
  }
}
