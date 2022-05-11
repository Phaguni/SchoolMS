import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectEditComponent } from './subject-edit.component';
import { SubjectEditRoutingModule } from './subject-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SubjectEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SubjectEditComponent
  ]
})
export class SubjectEditModule { }
