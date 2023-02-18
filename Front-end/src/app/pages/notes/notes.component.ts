import { Component, OnInit } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit{


  showNotes:boolean=true
  constructor(public servi:Service){

  }
  ngOnInit(): void {
   
    if(this.servi.notes.length>0){
      this.showNotes=false
}
  }
}
