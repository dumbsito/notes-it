import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit{

  
  showFavourite:boolean=true
  constructor(public servi:Service){

  }
  ngOnInit(): void {
    if(this.servi.favourites.length>0){
      this.showFavourite=false
}
  }
}
