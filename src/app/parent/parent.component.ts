import { Component } from '@angular/core';
import { dataService } from '../services/g-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers : [dataService]
})
export class ParentComponent {
  names : string[] = [];
  newNames : string[] = [];
  constructor(private _service : dataService){
    this.names = _service.names;
  }
  GetValueFromChild(msg : string) {
    console.log("hello from the parent and this is the recieved msg "+msg);
  }

}
