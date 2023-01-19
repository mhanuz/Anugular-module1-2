import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]', // element as an attribute
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
  ngOnInit(): void {
  }

}


