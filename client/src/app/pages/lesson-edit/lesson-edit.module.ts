import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonEditComponent } from './lesson-edit.component';
import { LessonEditRoutingModule } from './lesson-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LessonEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LessonEditComponent
  ]
})
export class LessonEditModule { }
