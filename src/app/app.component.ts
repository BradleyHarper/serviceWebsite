import { Component, OnInit } from '@angular/core';
import { faPhone, faMapPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Content } from './models/content';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FontAwesomeModule, Content]
})
export class AppComponent implements OnInit {
  descriptions = new Content();
  faPhone = faPhone;
  faMapPin = faMapPin;
  faEnvelope = faEnvelope;
  mapVisible = true;

  constructor() { }

  ngOnInit(): any { }

  openMapToggle = () => {
    this.mapVisible = !this.mapVisible;
  }

  closeMap = () => {
    this.mapVisible = false;
  }
}
