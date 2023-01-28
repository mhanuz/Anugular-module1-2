import { Component } from "@angular/core"; // @: means this is npm feature, @scope_name/package_name;
//decorator is a function, store meta data about class, method and property
@Component({ //  class decorator
    selector: '[app-server]',  // will be used as attribute directive in template
    templateUrl: "./server.component.html",   // external html source 
    styles:[`         
    .online{  
        color: pink;        // internal css 
    }
    `]
}) 
// export: it can be impoted from another component
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
