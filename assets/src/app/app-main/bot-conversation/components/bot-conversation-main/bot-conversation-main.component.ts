import { Component, OnInit, Input, EventEmitter, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { VisTreeService } from '../../services/vis-tree.service';
import { BotConversationService } from '../../services/bot-conversation.service';
import { DialogService } from '../../../shared-module';
import * as _ from 'lodash';

@Component({
  selector: 'app-bot-conversation-main',
  templateUrl: './bot-conversation-main.component.html',
  styleUrls: ['./bot-conversation-main.component.scss']
})
export class BotConversationMainComponent implements OnInit {
	@ViewChild('bottomMenuTemplate') private bottomMenuTemplate : TemplateRef<any>;
  @ViewChild('fbMessengerAutomationTemplate') private fbMessengerAutomationTemplate: TemplateRef<any>;
  @ViewChild('fbMessengerAutomationDeleteTemplate') private fbMessengerAutomationDeleteTemplate: TemplateRef<any>;
  @Input() parentInfo : any;
  @Input() conversationType : any;
  private container : any = this.elementRef.nativeElement;
  private onClickProperties : any;
  public automationCreateEditEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  public automationInputEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  public automationList : any[] = [];
  public clickedAutomation : any = {};
  public automationBeingEdited : any = {};
  public newPosition : number = 0;



  constructor(
  	private elementRef : ElementRef,
    private dialogService : DialogService,
  	private visTreeService : VisTreeService,
    private botConversationService : BotConversationService
  ){ }

  ngOnInit() {
    this.botConversationService.setParentInfo(this.parentInfo);
	  // this.initConversationFlow();
    this.getAutomationList();  	
  }

  getAutomationList(){
    this.botConversationService.getAutomationList(this.conversationType).subscribe((response)=>{
      console.log(response);
      this.automationList = response.data;
      if(this.automationList.length === 0){
        this.botConversationService.initConversation().subscribe((response)=>{
          console.log(response);
          this.getAutomationList();
        },(errorResponse)=>{
          console.log(errorResponse);
        });

      }else{
        console.log(this.automationList);
        this.initConversationFlow();
      }
    },(errorResponse)=>{
      console.log(errorResponse);
    });
  }

  initConversationFlow(){
    this.setTreeData();
    this.initTree();
  }

  setTreeData(){
      this.visTreeService.setNodes(this.automationList.map((elem)=>{
        return {
          id : elem._id,
          label : elem.template && elem.template.title?elem.template.title : "No Title",
          title : elem.template && elem.template.message?elem.template.message : "No Message"
        };
      }));

      this.visTreeService.setEdges(this.automationList.map((elem)=>{
        if(elem.previousAutomation){
          return {
            from : elem.previousAutomation,
            to : elem._id,
            label : elem['trigger']['triggerKeywords'].join(","),
            title : "Triggered with the keywords " + elem['trigger']['triggerKeywords'].join(",")
          };
        }else{
          return null;
        }
      }).filter(elem=>elem!==null));
  }

  initTree(){
  		
  		this.visTreeService.initTree(this.container);
      this.visTreeService.setVisTreeClickEvent((properties)=>{
        this.onClickProperties = properties;
        if(this.onClickProperties.nodes.length){
          this.clickedAutomation = _.find(this.automationList, (elem)=>{
            return elem._id.toString() === this.onClickProperties.nodes[0].toString();
          });
          this.newPosition = this.automationList.length;
          this.openBottomMenu();
        }
      });
  }

  openBottomMenu(){
    this.botConversationService.openBottomSheet({
      data : {
        templates : {
          body : this.bottomMenuTemplate
        }
      }
      
    });
  }

  automationFormDone(automationInfo : any){
    if(automationInfo._id){
      this.editAutomation(automationInfo);
    }else{
      this.createAutomation(automationInfo);
    }
  }


  createAutomation(automationInfo : any){
    this.botConversationService.createAutomation(automationInfo).subscribe((response)=>{
      automationInfo["_id"] = response.data._id;
      this.automationList.push(automationInfo);
      this.initConversationFlow();
      this.automationCreateEditEvent.emit(true);
    },(errorResponse)=>{
      console.log(errorResponse);
    });
  }

  editAutomation(automationInfo : any){
    this.botConversationService.updateAutomation(automationInfo).subscribe((response)=>{
      console.log(response);
      let automationIndex = _.findIndex(this.automationList,(elem)=>{
          return elem._id.toString() === automationInfo._id.toString();
      });
      if(automationIndex>=0){
        this.automationList[automationIndex] = automationInfo;
        this.initConversationFlow();
      }
      this.automationCreateEditEvent.emit(true);
    },(errorResponse)=>{ 
      console.log(errorResponse);
    });
  }

  deleteAutomation(callback){
    this.botConversationService.deleteAutomation(this.clickedAutomation._id).subscribe((response)=>{
      _.remove(this.automationList,(elem)=>{
        return elem._id.toString() === this.clickedAutomation._id.toString();
      });
      this.initConversationFlow();
      callback(true);
    },(errorResponse)=>{
      callback(false);
    });
  }


  openAutomationModal(type : string){
    let templateRef;
    if(type === 'create'){
      templateRef = this.fbMessengerAutomationTemplate;
      this.automationBeingEdited = null;
    }else if(type === 'edit'){
      templateRef = this.fbMessengerAutomationTemplate;
      this.automationBeingEdited = JSON.parse(JSON.stringify(this.clickedAutomation));
    }else if(type === 'delete'){
      templateRef = this.fbMessengerAutomationDeleteTemplate;
    }
    let confirm = (callback)=>{
      if(type === "create" || type === "edit"){
        this.automationInputEvent.emit(true);
        this.automationCreateEditEvent.subscribe((response)=>{
          if(response){
            callback(true);
            this.botConversationService.closeBottomSheet();
          }
          else callback(false);
        });

      }else if(type === "delete"){
        this.deleteAutomation((result)=>{

          if(result){
            callback(true); 
            this.botConversationService.closeBottomSheet();
          }
          else callback(false);
        });        
      }
    };
    let cancel = (callback)=>{
      // console.log("CANCEL CLICKED");
    };
    this.botConversationService.openAutomationModal({
      width : '750px',
      data : {
        body : {
          template : templateRef
        },
        header : {
          exists : false
        },
        callback : {
          confirm : confirm,
          cancel : cancel
        }
      }
    });
  }

  


  // addChildNode(nodeInfo : any):void{
  //   this.visTreeService.addNode(nodeInfo._id, nodeInfo.template.title, nodeInfo.previousAutomation, nodeInfo["trigger.triggerKeywords"].join(","));
  //   this.initTree();
  //   this.botConversationService.closeBottomSheet();
    
  // }

  // editNode(){
  //   this.visTreeService.editNode(this.onClickProperties.nodes[0], "New NAME");
  //   this.initTree();
  //   this.botConversationService.closeBottomSheet();
  // }

  // deleteNode(){
  //     this.visTreeService.deleteNode(this.clickedAutomation._id.toString());
  //     this.initTree();
  //     this.botConversationService.closeBottomSheet();
  // }

}
