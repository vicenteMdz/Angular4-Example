import { CommonModule } from '@angular/common';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ListPostRoutingModule } from './list-post-routing.module';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import {PostsService} from '../services/posts.service';

@NgModule({
  imports: [
    CommonModule,
    ListPostRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
  	ViewAllPostsComponent
  ],
  providers: [
      PostsService
  ],
  exports:[
    ViewAllPostsComponent
  ]
})
export class ListPostModule { }
