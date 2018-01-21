import { Component } from '@angular/core';
import Add from '../icons/add.svg';
import Plone from '../icons/plone.svg';
import Guillotina from '../icons/guillotina.svg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // We need to map the imported module to a class attribute
  // Look if we can do this more elegantly
  Add = Add;
  Plone = Plone;
  Guillotina = Guillotina;
}
