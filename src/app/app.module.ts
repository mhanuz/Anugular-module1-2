import { CommonModule } from '@angular/common'; // to import basic directives or pipes like NgIf,ngFor, uppercase
import { NgModule } from '@angular/core'; // extend application and configure the application
import { FormsModule } from '@angular/forms'; // allow forms in html page also isolate
import { BrowserModule } from '@angular/platform-browser'; // helps lunching and running the application

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
  imports: [ // import necessary classes for component template
    BrowserModule,
    FormsModule
  ],
  providers: [], // contains the service list, the services can be used globaly
  bootstrap: [AppComponent,BrowserComponent,ServerComponent] //component registration for bootstrap: which components will be provided bootstrap
  // angular start the main.ts file first and bootstrap passes components as an argument
})
export class AppModule { }
