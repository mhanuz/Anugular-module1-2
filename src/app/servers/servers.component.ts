import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]', // this [app-servers] component will be used as an attribute directive in in template
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  stringIntUsingPB="String Inter Polation ....."
  serverUpdate = "Server is on"
  ButtonValue = "Server OFF"
  ServerName = 'Test server'
  ServerCreated =false;
  Servers = ['Test server','Test server 2']
  constructor() { // method executor
    setTimeout(()=>{
      this.allowNewServer = true
    },2000)

    setTimeout(()=>{
      this.stringIntUsingPB="Property Binding!!!!"
  },2000)
  }
  onCreateServer(){
    this.ServerCreated = true
    this.Servers.push(this.ServerName)
    this.ServerName= "server is created and name is" + this.ServerName
  }

  getServerUpdate(){
    this.serverUpdate = 'Server is off for 2 seconds'
    this.ButtonValue = "Server on"
    setTimeout(()=>{
      this.getServerUpdate2()
  },2000)
  
    
  }

  getServerUpdate2(){
    this.serverUpdate = 'Server is on'
    this.ButtonValue = "Server OFF"
  }

  onUpdateServerName(event: any){
    this.ServerName = event.target.value;
    
  }
  // during the instantiation this lifecycle hook will be executed
  ngOnInit(): void {
  }

}


