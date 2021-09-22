import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from 'src/app/models/position/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/positions"
  constructor(
    private httpClient :HttpClient,
  ) { }

  positionAdd(position : Position){
    return this.httpClient.post(this.apiUrl+"/add?positionTitle="+position.title,position.title);
  }

  getPositions():Observable<Position[]>{

    return this.httpClient.get<Position[]>(this.apiUrl+"/get/all");

  }

  


}
