import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Router} from "@angular/router"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myname: string;
  expertised: string;
  userTemplate: boolean;
  contentAboutMe: string;
  networks: any;
  MobileNumber: string;
  emailId: string;
  pollingData: any;   
  headers: Headers;
  oldSelected : string;   

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };
  
  constructor(http:Http, private router : Router) {
    this.networks = [
      { name: 'Facebook', imgSrc: '../app/assets/facebook.png', url: 'http://facebook.com' },
      { name: 'LinkedIn', imgSrc: '../app/assets/linkedin.png', url: 'http://linkedin.com' },
      { name: 'twitter', imgSrc: '../app/assets/twiiter.png', url: 'http://twitter.com' }];

      this.pollingData = Observable.interval(2000)
      .switchMap(() => http.get('http://localhost:8080/greeting')).map((data) => data.json())
      .subscribe((data) => {
        if(data != null){
        if(data.content === this.oldSelected) {
          console.log(data.content , this.oldSelected);
        }else{
          this.oldSelected = data.content;
          this.router.navigate(['/'+data.content]);
        }
      }
      });
  }

  ngOnDestroy() {
    this.pollingData.unsubscribe();
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#myname').fadeIn('slow');
    });
    this.myname = 'Mouli Kiran';
    this.expertised = 'Full Stack developer';
    this.userTemplate = true;
    this.contentAboutMe = `this is me about this is me about this is me about
                          this is me about this is me about this is me about
                          this is me aboutthis is me about`;
    this.emailId = 'moulikiran.somesetty@gmail.com';
    this.MobileNumber = '9888757541';
  }
}
