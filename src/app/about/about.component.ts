import { Component } from '@angular/core';
import { dataService } from '../services/g-service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers : [dataService]
})
export class AboutComponent {
  names : string[] = [];
  constructor(private _service : dataService) {
    this.names = _service.names;
    this.names.push("new name");
  }
}
