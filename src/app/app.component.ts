import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myPortfolio';

  projects:any;
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('https://localhost:7065/api/projects').subscribe({
       next: response => this.projects = response,
       error: error =>  console.log(error),
       complete:() =>  console.log("Request has completed")

    })
  }
}
