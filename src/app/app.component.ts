import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


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
  constructor() {
    this.networks = [
      { name: 'Facebook', imgSrc: '../app/assets/facebook.png', url: 'http://facebook.com' },
      { name: 'LinkedIn', imgSrc: '../app/assets/linkedin.png', url: 'http://linkedin.com' },
      { name: 'twitter', imgSrc: '../app/assets/twiiter.png', url: 'http://twitter.com' }];
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
