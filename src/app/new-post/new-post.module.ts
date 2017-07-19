import { CommonModule } from '@angular/common';
import { NgModule }       from '@angular/core';

import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NewPostRoutingModule } from './new-post-routing.module';
import { AddpostComponent } from './addpost/addpost.component';

import { PostsService } from '../services/posts.service';

@NgModule({
  imports: [
    CommonModule,
    NewPostRoutingModule,
    FormsModule,
     HttpModule,
    JsonpModule,
  ],
  declarations: [
  	AddpostComponent
  ],
  providers: [
    PostsService
  ],
  exports:[
    AddpostComponent
  ]
})
export class NewPostModule { }
