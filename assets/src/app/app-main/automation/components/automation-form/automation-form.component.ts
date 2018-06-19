import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AutomationService } from '../../services/automation.service';


@Component({
  selector: 'app-automation-form',
  templateUrl: './automation-form.component.html',
  styleUrls: ['./automation-form.component.scss']
})
export class AutomationFormComponent implements OnInit {
	public automationForm : FormGroup;
  constructor(
  	private formBuilder : FormBuilder,
  	private automationService : AutomationService 
  ) { }

  ngOnInit() {

  }


  initAutomationForm(){
  	this.automationForm = this.formBuilder.group({});
  }

  createAutomation(){
  	this.automationService.createAutomation(this.automationForm.value).subscribe((response)=>{

  	},(errorResponse)=>{

  	});
  }

  updateAutomation(){
  	this.automationService.updateAutomation(this.automationForm.value).subscribe((response)=>{
  		
  	},(errorResponse)=>{

  	});
  }

}
