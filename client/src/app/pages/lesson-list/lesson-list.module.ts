import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonListComponent } from './lesson-list.component';
import { LessonListRoutingModule } from './lesson-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LessonListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LessonListComponent
  ]
})
export class LessonListModule { }
