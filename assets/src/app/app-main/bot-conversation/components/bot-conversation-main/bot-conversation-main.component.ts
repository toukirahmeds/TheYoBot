import { Component, OnInit, Input, EventEmitter, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { VisTreeService } from '../../services/vis-tree.service';
import { BotConversationService } from '../../services/bot-conversation.service';
import { DialogService } from '../../../shared-module';

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
  public automationList : any[] = [];



  constructor(
  	private elementRef : ElementRef,
    private dialogService : DialogService,
  	private visTreeService : VisTreeService,
    private botConversationService : BotConversationService
  ){ }

  ngOnInit() {
    this.botConversationService.setParentInfo(this.parentInfo);
	  this.initConversationFlow();
    this.getAutomationList();  	
  }

  getAutomationList(){
    this.botConversationService.getAutomationList(this.conversationType).subscribe((response)=>{
      console.log(response);
      this.automationList = response.data;
      if(this.automationList.length === 0){
        // this.botConversationService.
      }else{
        
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
      this.visTreeService.setNodes([
          {id: 1, label: 'Welcome', color : 'red'}/*,
          {id: 2, label: 'Node 2'},
          {id: 3, label: 'Node 3'},
          {id: 4, label: 'Node 4'},
          {id: 5, label: 'Node 5'}*/
      ]);

      this.visTreeService.setEdges([
           /*{from: 1, to: 3},
           {from: 1, to: 2},
           {from: 2, to: 4},
           {from: 2, to: 5}*/
      ]);
  }

  initTree(){
  		
  		this.visTreeService.initTree(this.container);
      this.visTreeService.setVisTreeClickEvent((properties)=>{
        this.onClickProperties = properties;
        if(this.onClickProperties.nodes.length){
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


  openAutomationModal(templateRef : any){
    let confirm = (callback)=>{

    };
    let cancel = (callback)=>{

    };
    this.botConversationService.openAutomationModal({
      width : '750px',
      data : {
        body : {
          template : this[templateRef]
        }
      }
    });
  }

  


  addChildNode(label:string){
    this.visTreeService.addNode(label, this.onClickProperties.nodes[0]);
    this.initTree();
    this.botConversationService.closeBottomSheet();
    
  }

  editNode(){
    this.visTreeService.editNode(this.onClickProperties.nodes[0], "New NAME");
    this.initTree();
    this.botConversationService.closeBottomSheet();
  }

  deleteNode(){
      this.visTreeService.deleteNode(this.onClickProperties.nodes[0]);
      this.initTree();
      this.botConversationService.closeBottomSheet();
  }




 

}
