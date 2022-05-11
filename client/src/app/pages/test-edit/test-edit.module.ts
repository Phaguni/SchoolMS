import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestEditComponent } from './test-edit.component';
import { TestEditRoutingModule } from './test-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TestEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TestEditComponent
  ]
})
export class TestEditModule { }
