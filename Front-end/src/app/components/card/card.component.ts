import { Component, Input } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() resultadoHijo:any[]=[]
  constructor(public servi:Service){

  }

  delete(index:number,item:any){
  
   this.servi.notes.splice(index,1);
   this.servi.favourites.splice(index,1);
   
   if(this.servi.trash.includes(item)){
    this.servi.trash.splice(index,1);
   }else{
    this.servi.trash.push(item)
   }
  }
}
