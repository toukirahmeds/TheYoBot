import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AutomationFormComponent } from './components/automation-form/automation-form.component';
import { AuthomationNodeComponent } from './components/authomation-node/authomation-node.component';


import { AutomationService } from './services/automation.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AutomationFormComponent, AuthomationNodeComponent],
  providers : [ AutomationService ]
})
export class AutomationModule { }
