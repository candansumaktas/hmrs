import { Component, OnInit } from '@angular/core';
import { BaseListResponse } from 'src/app/models/listResponse/listResponse';
import { Position } from 'src/app/models/position/position';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {

  positionList: Position[]=[]
  page: number = 1;
  itemsPerPage:number=10;
  constructor(private positionService : PositionService) { }

  ngOnInit(): void {
    this.getPositions();
  }

  getPositions(){
    this.positionService.getPositions().subscribe((data:any)=>{
      this.positionList=data.data
      console.log(data.data)
    
  })
  }

}
