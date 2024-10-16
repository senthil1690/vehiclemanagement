import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule, NgSelectModule, TableModule
  ]
})
export class ViewvehicleModule { }
