import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../../services/service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

datos:any
showName:boolean=false
showSurname:boolean=false
showPassword:boolean=false
constructor(private http:HttpClient,private router:Router,private toastr:ToastrService,public servi:Service){

}
  ngOnInit(): void {


  }
mo(){
console.log(this.datos);
this.router.navigate(["/login"]);

}
enviarCorreo(){


/*if(this.password.length<8 || this.name.length<6 || this.surname.length<6 || this.email.length<6){
this.showPassword=true;
}else{*/
let params= {
  name:this.servi.name,
  surname:this.servi.surname,
  email:this.servi.email,
  password:this.servi.password,
  }

  this.servi
  .registerUser(params)
  .subscribe(res => {
    if(res.success) {
      this.servi.showAdded=true
      setTimeout(() => {
         this.servi.showAdded=false
         
      }, 3000);
     this.router.navigate(["/login"])
    }
    else {
      console.log(res);
      
      this.servi.showAdded=true
      setTimeout(() => {
         this.servi.showAdded=false
         
      }, 3000);
     
    }
  });
  /*  console.log("alta exitosa");
    this.servi.showAdded=true
    setTimeout(() => {
       this.servi.showAdded=false
       
    }, 3000);
   this.router.navigate(["/login"])

  },err=>{

    if (err.status === 409) {
      console.log("email exists");
      
      this.servi.showAdded=true
      setTimeout(() => {
         this.servi.showAdded=false
         
      }, 3000);
    }
    else{
      console.log("hubo un error");
    } */ 

  }
/*this.http.post(`https://dead-hare-frock.cyclic.app/register`,params).subscribe((data:any)=>{
*/

toLogin(){
  this.router.navigate(["/login"])

}
validaEmail(email:string){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
}





/*res =>{
            
  this.router.navigate(["/login"])

},
  err =>{ 
  this.servi.showAdded=true
  setTimeout(() => {
     this.servi.showAdded=false
     
  }, 3000);*/