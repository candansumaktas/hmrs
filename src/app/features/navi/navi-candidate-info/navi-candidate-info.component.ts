import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';

@Component({
  selector: 'app-navi-candidate-info',
  templateUrl: './navi-candidate-info.component.html',
  styleUrls: ['./navi-candidate-info.component.css']
})
export class NaviCandidateInfoComponent implements OnInit {

  
  candidate:Candidate
  constructor(private router:Router) { }
   ngOnInit(): void {
  }
   signOut(){
    localStorage.clear()
    this.router.navigate(['home']);
  }
   getCandidateInfo():Candidate{
    this.candidate=JSON.parse(localStorage.getItem("candidate"))
    return this.candidate;
    }
  }

