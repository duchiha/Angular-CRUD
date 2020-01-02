import { Component, OnInit } from '@angular/core';
import { Version ,VERSION} from '@angular/core'; 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public pageTitle = 'Welcome';

  constructor() { }

  ngOnInit() {
    console.log('You are using Angular Version: '+new Version(VERSION.full).full);
  }

}
