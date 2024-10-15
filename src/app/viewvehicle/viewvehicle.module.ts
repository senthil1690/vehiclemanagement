import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule, NgSelectModule
  ]
})
export class ViewvehicleModule { }
