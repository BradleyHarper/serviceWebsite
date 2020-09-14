import { Component } from '@angular/core';
import { faPhone, faMapPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Content } from './models/content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FontAwesomeModule, Content]
})
export class AppComponent {
  descriptions = new Content();
  faPhone = faPhone;
  faMapPin = faMapPin;
  faEnvelope = faEnvelope;
  mapVisible = true;

  openMapToggle = () => {
    this.mapVisible = !this.mapVisible;
  }
}
