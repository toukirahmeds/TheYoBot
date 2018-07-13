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
  @Input('position') position : number = 0;
  @Input('previousAutomation') previousAutomation : Automation;
  @Input('inputDoneClickEvent') inputDoneClickEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() doneClicked : EventEmitter<any> = new EventEmitter<any>();
  public automationForm : FormGroup;
  public templateForm : FormGroup;
  public keywords : string[] = [];
  public separatorKeysCodes : number[]= [ENTER];
  public triggerTypes : any[] = TriggerTypes;
  constructor(
  	private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.automation);
    this.initAutomationForm(this.automation?this.automation:new Automation());
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
      "template" : this.getTemplateGroup(automation.template),
      "position" : [automation.position?automation.position:this.position],
      "previousPosition" : [automation.previousPosition? automation.previousPosition: this.previousAutomation.position],
      "previousAutomation" : [automation.previousAutomation? automation.previousAutomation: this.previousAutomation._id]
    });
    if(automation.trigger.triggerKeywords){
      this.keywords = automation.trigger.triggerKeywords;
    }
  }

  


  addKeyword($event){
    if($event.value.trim().toLowerCase()){
      this.keywords.push($event.value.trim().toLowerCase());
    }
    $event.input.value = '';
    this.automationForm.controls["trigger.triggerKeywords"].setValue(this.keywords);

  }

  removeKeyword(ind:number){
    this.keywords.splice(ind,1);
    this.automationForm.controls["trigger.triggerKeywords"].setValue(this.keywords);
  }


  onDoneClicked(){
    let automationInfo = this.automationForm.value;
    if(!automationInfo._id){
      delete automationInfo._id;
    }

    if(!automationInfo.template._id){
      delete automationInfo.template._id;
    }
    automationInfo["trigger"] = new Object();
    automationInfo["trigger"]["triggerType"] = automationInfo["trigger.triggerType"];
    delete automationInfo["trigger.triggerType"];
    automationInfo["trigger"]["triggerKeywords"] = automationInfo["trigger.triggerKeywords"];
    delete automationInfo["trigger.triggerKeywords"];

    this.doneClicked.emit(automationInfo);
  }

}
