import { Component } from "@angular/core"; // Component imported from angular core functionality 

//decorator: typescript feature 
@Component({ // metadata for this class
    selector: '[app-server]',  // name should be unique, this component will be used in html 
    templateUrl: "./server.component.html",   // html source 
    styles:[`
    .online{
        color: pink;
    }
    `]
}) 
// export: it can be accessed from outside
export class ServerComponent { // class name should follow the convention: Component Name and Description 
    ServerId: number = 10;
    ServerStatus: string = "Offline";

    constructor(){
        // random method return value between 0 to 1 
        this.ServerStatus = Math.random() > 0.5 ? "Online": "Offline" //. ternary operator: output will be  "Online" if condition true otherwise "offline"; 
    }
    getServerStatus() {
        return this.ServerStatus;
    }
    getColor(){
        return this.ServerStatus ===  "Online" ? "green": "red";
    }
}