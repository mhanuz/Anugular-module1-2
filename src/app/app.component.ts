import { Component } from '@angular/core';

@Component({ // Appcomponent Decorator
  selector: 'app-root', // denote the app-root element in index.HTML where all app component will replace the root component
  templateUrl: './app.component.html',

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
export class AppComponent {
}
