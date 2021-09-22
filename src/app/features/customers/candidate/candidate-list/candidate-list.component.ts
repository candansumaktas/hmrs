import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  
  candidateList : Candidate[]=[]

  page: number = 1;
  itemsPerPage:number=10;
  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(){
    this.candidateService.getCandidates().subscribe((data:any)=>{
      this.candidateList=data.data;
      console.log(data.data)
    
  })
  }

}
