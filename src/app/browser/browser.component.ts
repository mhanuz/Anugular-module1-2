import { Component } from "@angular/core"; 

@Component({
    selector: 'app-browser',
    templateUrl: './browser.component.html'
})

export class BrowserComponent{
    setPropertyValue=false
    stringIntUsingPB = true
    constructor(){
        setTimeout(()=>{
            this.setPropertyValue=true
        },2000)

    }
}