import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectListComponent } from './subject-list.component';
import { SubjectListRoutingModule } from './subject-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SubjectListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SubjectListComponent
  ]
})
export class SubjectListModule { }
