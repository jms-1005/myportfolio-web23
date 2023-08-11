import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { About } from '../interfaces/about.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  about:any;
  aboutText:string = '';
  headShot:string = '';
  serverURL = environment.server;
  loading = true;
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    setTimeout(() => {
      this.http.get<About>(this.serverURL + '/api/about?populate=*').subscribe( res => {
        this.loading = false;
        console.log(res);
        this.about = res;
        this.aboutText = res.data.attributes.AboutText;
        this.headShot = this.serverURL + res.data.attributes.HeadShot.data.attributes.formats.medium.url;
      })

    }, 3000);


  }
}
