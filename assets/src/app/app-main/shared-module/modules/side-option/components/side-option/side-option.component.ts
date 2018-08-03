import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-option',
  templateUrl: './side-option.component.html',
  styleUrls: ['./side-option.component.scss']
})
export class SideOptionComponent implements OnInit {
	@Input('heading') heading : string = "Heading";
	@Input('options') options : any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
