import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessengerConversationService } from '../../services/messenger-conversation.service';
import { FBMessengerType } from '../../../data/automation.types';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-messenger-conversation-main',
  templateUrl: './messenger-conversation-main.component.html',
  styleUrls: ['./messenger-conversation-main.component.scss']
})
export class MessengerConversationMainComponent implements OnInit, AfterViewInit {
	public pageInfo : any = {};
  public conversationType : string = FBMessengerType;
  constructor(
  	private messengerConversationService : MessengerConversationService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.pageInfo = this.messengerConversationService.getPageInfo();
  }

  ngAfterViewInit(){
    this.messengerConversationService.setFuseConfigs();
  }

}
