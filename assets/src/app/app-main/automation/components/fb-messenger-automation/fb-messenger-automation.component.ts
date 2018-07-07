import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Automation } from '../../models/automation.model';
import { Template } from '../../models/fb-messenger-template.model';
import { ENTER } from '@angular/cdk/keycodes';
import { FBMessengerType } from '../../../data/automation.types';
import { TriggerTypes } from '../../../data/automation-trigger.types';


@Component({
  selector: 'app-fb-messenger-automation',
  templateUrl: './fb-messenger-automation.component.html',
  styleUrls: ['./fb-messenger-automation.component.scss']
})
export class FbMessengerAutomationComponent implements OnInit {
  @Input('automation') automation : Automation;
  @Input('inputDoneClickEvent') inputDoneClickEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() doneClicked : EventEmitter<any> = new EventEmitter<any>();
  public automationForm : FormGroup;
  public templateForm : FormGroup;
  public previousAutomation : Automation;
  public keywords : string[] = [];
  public separatorKeysCodes : number[]= [ENTER];
  public triggerTypes : any[] = TriggerTypes;
  constructor(
  	private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.initAutomationForm();
    this.inputDoneClickEvent.subscribe((clicked)=>{
      if(clicked){
        this.onDoneClicked();
      }
    });
  }

  getTemplateGroup(template : Template = new Template()){
    return this.templateForm = this.formBuilder.group({
      "_id" : [template._id],
      "page" : [template.page],
      "type" : [FBMessengerType],
      "templateType" : [template.templateType],
      "title" : [template.title],
      "message" : [template.message],
      "attachment" : [template.attachment]
    });
  }


  initAutomationForm(automation : Automation = new Automation()){
  	this.automationForm = this.formBuilder.group({
      "_id" : [automation._id],
      "page" : [automation.page],
      "type" : [automation.type],
      "trigger.triggerType" : [automation.trigger.triggerType],
      "trigger.triggerKeywords" : [automation.trigger.triggerKeywords],
      "template" : this.getTemplateGroup(),
      "position" : [automation.position],
      "previousPosition" : [automation.previousPosition],
      "previousAutomation" : [automation.previousAutomation]
    });
  }

  


  addKeyword($event){
    console.log($event);
    if($event.value.trim().toLowerCase()){
      this.keywords.push($event.value.trim().toLowerCase());
    }
    $event.input.value = '';

  }

  removeKeyword(ind:number){
    this.keywords.splice(ind,1);
  }


  onDoneClicked(){
    this.doneClicked.emit(this.automationForm.value);
  }

}
