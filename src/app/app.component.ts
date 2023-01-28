import { Component } from '@angular/core';

@Component({ // Appcomponent Decorator
  selector: 'app-root', //css selector: how the compoent used in template, here app-root will be used as an  element in the template.
  templateUrl: './app.component.html', // html template: how the template  will be rendered

// inline html
  // template:`
  // <h1> I am root component</h1>
  // <app-browser></app-browser>
  // <app-server></app-server>
  // <app-servers></app-servers>
  // `,
  styleUrls: ['./app.component.css'] //external css


  // styles:[` h1{ color: pink; background-color: yellow;}`] // inline css
 })
export class AppComponent { // class component Handles data and functionality
}
