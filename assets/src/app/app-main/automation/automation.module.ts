import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatChipsModule, MatIconModule } from '@angular/material';

import { AutomationService } from './services/automation.service';
import { TemplateService } from './services/template.service';
import { FbAutomationComponent } from './components/fb-automation/fb-automation.component';
import { FbMessengerAutomationComponent } from './components/fb-messenger-automation/fb-messenger-automation.component';
import { FbPostAutomationComponent } from './components/fb-post-automation/fb-post-automation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule
  ],
  declarations: [FbAutomationComponent, FbMessengerAutomationComponent, FbPostAutomationComponent],
  providers : [ AutomationService, TemplateService ],
  exports : [FbMessengerAutomationComponent,FbPostAutomationComponent]
})
export class AutomationModule { }
