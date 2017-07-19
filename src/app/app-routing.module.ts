import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllPostsComponent } from './list-post/view-all-posts/view-all-posts.component';
import { NewPostModule } from './new-post/new-post.module';

const routes: Routes = [
  {
    path: '',    
    pathMatch: 'full',
    component: ViewAllPostsComponent
  },
  {
  	path: 'newPost',
  	loadChildren: './new-post/new-post.module#NewPostModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
