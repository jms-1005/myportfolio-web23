import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  data:any;
  serverURL = environment.server;
  constructor(private http: HttpClient){}

  ngOnInit(): void {
      //http://localhost:1337/api/welcome?populate=*
      this.http.get<any>(this.serverURL + '/api/welcome?populate=*').subscribe( response => {
        console.log(response);
        this.data = response;
        console.log('Data', this.data);
      })
  }

}
