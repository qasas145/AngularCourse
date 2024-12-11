import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { dataService } from '../g-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers : [dataService]
})
export class ChildComponent implements OnChanges, OnInit, OnDestroy{
  ngOnDestroy(): void {
    console.log("destroying from child component");
  }
  ngOnInit(): void {
    console.log("init from child component ");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes from child component");
  }
  @Input() InputString :string='';
  @Output() SendValueToTheParent = new EventEmitter<string>()
  testString : string = "Muhammad Elsayed Elqasas osman mahoud";
  bgCondition : boolean = true;

  valueForBinding : string = "Muhammad for binding";


  searchValue : string = "";
  sayHello() {
    console.log("this my click event ");
  }
  sendValueToParent() {
    this.SendValueToTheParent.emit("Send this value to the parent ");
  }
  printInConsole(e : KeyboardEvent) {
    const inputField = e.target as HTMLInputElement;
    console.log(inputField.value);
  }
}
