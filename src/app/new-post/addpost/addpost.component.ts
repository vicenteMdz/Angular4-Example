import { Component, OnInit } from '@angular/core';

import { EventEmitter, Input, OnChanges } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { PostsService } from '../../services/posts.service';
import { EmitterService } from '../../services/emitter.service';
import { Post } from '../../model/posts'

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  	constructor(private postsService: PostsService){

  	}

    private model = new Post(3,'','','');

   submitComment(){
        // Variable to hold a reference of addComment/updateComment
        let postOperation:Observable<Post[]>;
        // Create a new post
        postOperation = this.postsService.addPost(this.model);

        // Subscribe to observable
        postOperation.subscribe(
                                model => {
                                    // Empty model
                                    this.model = new Post(3,'','','');
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }


  ngOnInit() {
  }

}
