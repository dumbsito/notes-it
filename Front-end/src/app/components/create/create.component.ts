import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../services/service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

title:string=""
description:string=""
category:string=""
checked:boolean=false;
showTitle:boolean=false;
showDescription:boolean=false;
Isfavourite:string="Not favourite"
constructor(public servi:Service,public route:Router){
}
  ngOnInit(): void {
  console.log(environment.env);
  
  }
check(){
  if(this.checked===false){
    this.Isfavourite="Is favourite"
}else{
 this.Isfavourite="Not favourite"
}
}

  create(){

    if(this.title.length<4 || this.description.length<4){
      this.showTitle=true;
      this.showDescription=true;
      return;
    }else{
let newNote={
  title:this.title,
  description:this.description,
  category:this.category,
  checked:this.checked
}
 console.log(newNote);
 if(this.servi.notes.length>3){
  
  return;
 }
 this.servi.notes.push(newNote)
 if(this.checked===true){
  this.servi.favourites.push(newNote)

 }
 
 
this.route.navigate(["/notes"])
this.servi.showAdded=true
setTimeout(() => {
   this.servi.showAdded=false
   
}, 3000);
  }
}
}
