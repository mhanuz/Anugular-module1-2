import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; //omit the dot notation 
// because extention added by webpacks

import { BrowserComponent } from './browser/browser.component';
import { ServersComponent } from './servers/servers.component';
@NgModule({
  declarations: [ // register Components
    AppComponent,
    ServerComponent,
    BrowserComponent,
    ServersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,BrowserComponent,ServerComponent] // list the component, should know the angular
  // angular start the main.ts file first and bootstrap pass app component as an argument
  // bootstrap will work for AppComponent
})
export class AppModule { }
