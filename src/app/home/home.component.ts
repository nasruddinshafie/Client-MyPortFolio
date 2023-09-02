import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  users:any;
  constructor(private http: HttpClient){}

  ngOnInit(): void {
   this.GetUsers();
  }

  RegisterToggle(){
    this.registerMode = !this.registerMode;
  }

  GetUsers(){
    this.http.get('https://localhost:7065/api/users').subscribe({
      next: response => this.users = response,
      error: error =>  console.log(error),
      complete:() =>  console.log("Request has completed")
    
   })
  }

  CancelRegisterMode(event:boolean){
    this.registerMode = event;
  }
  
}
