import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';

export const routes: Routes = [
  {
    path: '',
    component: AddpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPostRoutingModule { }
