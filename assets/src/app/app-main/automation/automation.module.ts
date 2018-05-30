import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomationFormComponent } from './components/automation-form/automation-form.component';
import { AuthomationNodeComponent } from './components/authomation-node/authomation-node.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AutomationFormComponent, AuthomationNodeComponent]
})
export class AutomationModule { }
