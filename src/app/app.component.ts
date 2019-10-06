import { Component } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

update:boolean= false
  testData: any;
  constructor(updates:SwUpdate,private data: DataService){

      updates.available.subscribe(event=>{
          // this.update= true;

          updates.activateUpdate().then(()=>document.location.reload());
      })
  }

  ngOnInit(){
    this.data.testApi().subscribe((res)=>{
        this.testData = res;
    })
  }
}
