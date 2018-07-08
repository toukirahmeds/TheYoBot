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
      // this.visTreeService.setNodes([
      //     {id: 1, label: 'Welcome', color : 'red'},
      //     {id: 2, label: 'Node 2'},
      //     {id: 3, label: 'Node 3'},
      //     {id: 4, label: 'Node 4'},
      //     {id: 5, label: 'Node 5'}
      // ]);

      this.visTreeService.setNodes(this.automationList.map((elem)=>{
        return {
          id : elem._id,
          label : elem.template && elem.template.title?elem.template.title : "No Title"
        };
      }));


      // this.visTreeService.setEdges([
      //      {from: 1, to: 3},
      //      {from: 1, to: 2},
      //      {from: 2, to: 4},
      //      {from: 2, to: 5}
      // ]);
      this.visTreeService.setEdges(this.automationList.map((elem)=>{
        if(elem.previousAutomation){
          return {
            from : elem.previousAutomation,
            to : elem._id
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

    }else{
      this.createAutomation(automationInfo);
    }
  }

  createAutomation(automationInfo : any){
    this.botConversationService.createAutomation(automationInfo).subscribe((response)=>{
      this.addChildNode(response.data._id, automationInfo.template.title, automationInfo.previousAutomation);
      this.automationCreateEditEvent.emit(true);
    },(errorResponse)=>{
      console.log(errorResponse);
    });
  }

  editAutomation(automationInfo : any){

  }

  deleteAutomation(callback){
    this.botConversationService.deleteAutomation(this.clickedAutomation._id).subscribe((response)=>{
      callback(true);
    },(errorResponse)=>{
      callback(false);
    });
  }


  openAutomationModal(templateRef : any){
    let confirm = (callback)=>{
      if(templateRef === "fbMessengerAutomationTemplate"){
        this.automationInputEvent.emit(true);
        this.automationCreateEditEvent.subscribe((response)=>{
          if(response) callback(true);
          else callback(false);
        });

      }else{
        this.deleteAutomation((result)=>{

          if(result){
            this.deleteNode();
            callback(true); 
          }
          else callback(false);
        });        
      }
    };
    let cancel = (callback)=>{
      console.log("CANCEL CLICKED");
    };
    this.botConversationService.openAutomationModal({
      width : '750px',
      data : {
        body : {
          template : this[templateRef]
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

  


  addChildNode(id: string, label:string, parentId : string){
    this.visTreeService.addNode(id, label, parentId);
    this.initTree();
    this.botConversationService.closeBottomSheet();
    
  }

  editNode(){
    this.visTreeService.editNode(this.onClickProperties.nodes[0], "New NAME");
    this.initTree();
    this.botConversationService.closeBottomSheet();
  }

  deleteNode(){
      this.visTreeService.deleteNode(this.clickedAutomation._id.toString());
      this.initTree();
      this.botConversationService.closeBottomSheet();
  }

}
