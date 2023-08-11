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
  loading = true;
  constructor(private http: HttpClient){}

  ngOnInit(): void {
      //http://localhost:1337/api/welcome?populate=*

      //display a loading icon
      this.http.get<any>(this.serverURL + '/api/welcome?populate=*').subscribe( response => {
        //hide the loading icon
        this.loading = false;
        console.log(response);
        this.data = response;
        console.log('Data', this.data);
      })
  }

}
