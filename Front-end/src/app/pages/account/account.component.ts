import { Component } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {


  constructor(public servi:Service){

  }
}
