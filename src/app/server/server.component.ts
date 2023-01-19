import { Component } from "@angular/core"; // Component imported from angular core functionality 

//decorator: typescript feature 
@Component({ // metadata for this class
    selector: '[app-server]',  // name should be unique, this component will be used in html 
    templateUrl: "./server.component.html"   // html source 
}) 
// export: it can be accessed from outside
export class ServerComponent { // class name should follow the convention: Component Name and Description 
    ServerId: number = 10;
    ServerStatus: string = "offline";

    getServerStatus() {
        return this.ServerStatus;
    }
}