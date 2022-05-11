import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestListComponent } from './test-list.component';
import { TestListRoutingModule } from './test-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TestListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TestListComponent
  ]
})
export class TestListModule { }
