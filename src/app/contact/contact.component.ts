import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  email:string = '';
  fullname:string = '';
  phoneno:string = '';
  message:string = '';
  hideMessage = true;
  serverURL = environment.server;
  dateToday = new Date();

  constructor(private http:HttpClient, private recaptchaV3Service: ReCaptchaV3Service){}

  resolved(event:any){
    console.log('EVENT:', event);
  }

  handleToken(token:any){
    console.log('TOKEN:', token);
  }

  submitForm(){
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => this.handleToken(token));
    console.log(this.email, this.fullname, this.phoneno, this.message);
    let formdata = {
      data:{
        "email": this.email,
        "FullName": this.fullname,
        "PhoneNo" : this.phoneno,
        "Message": this.message
      }
    };
    this.http.post<any>(this.serverURL + '/api/leads', formdata).subscribe( res => {
      console.log(res);
      if(res.data === null){

      }
      else{
        this.hideMessage = false;
      }
    })
  }


}
