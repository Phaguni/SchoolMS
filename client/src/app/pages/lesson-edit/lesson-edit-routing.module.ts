import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonEditComponent } from './lesson-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LessonEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonEditRoutingModule { }
