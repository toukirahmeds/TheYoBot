import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemplateFormComponent } from './components/template-form/template-form.component';

import { MessageTemplateService } from './services/message-template.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TemplateFormComponent],
  providers : [ MessageTemplateService ]
})
export class MessageTemplateModule { }
