import { Component, OnInit } from '@angular/core';

import { Service } from '../../services/service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit{

  showTrash:boolean=true
  constructor(public servi:Service){

  }
  ngOnInit(): void {
    if(this.servi.trash.length>0){
      this.showTrash=false
}

  }

  deleteAll(){
    this.servi.trash=[];
  }

  
}

