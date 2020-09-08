import {Component, OnInit} from '@angular/core';
import { faPhone, faMapPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FontAwesomeModule]
})
export class AppComponent implements OnInit {
  faphone = faPhone;
  faMapPin = faMapPin;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.dropdown-trigger');
      const instances = M.Dropdown.init(elems);
    });
  }
}
