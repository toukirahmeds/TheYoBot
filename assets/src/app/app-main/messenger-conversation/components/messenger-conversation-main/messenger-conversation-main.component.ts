import { Component, OnInit } from '@angular/core';
import { MessengerConversationService } from '../../services/messenger-conversation.service';
import { FBMessengerType } from '../../../data/automation.types';


@Component({
  selector: 'app-messenger-conversation-main',
  templateUrl: './messenger-conversation-main.component.html',
  styleUrls: ['./messenger-conversation-main.component.scss']
})
export class MessengerConversationMainComponent implements OnInit {
	public pageInfo : any = {};
  public conversationType : string = FBMessengerType;
  constructor(
  	private messengerConversationService : MessengerConversationService
  ) { }

  ngOnInit() {
  	this.pageInfo = this.messengerConversationService.getPageInfo();
  }

}
