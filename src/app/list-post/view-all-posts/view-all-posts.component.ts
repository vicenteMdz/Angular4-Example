import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../model/Posts';
import {PostsService} from '../../services/posts.service';
import { EmitterService } from '../../services/emitter.service';

@Component({
  selector: 'app-view-all-posts',
  templateUrl: './view-all-posts.component.html',
  styleUrls: ['./view-all-posts.component.css']
})
export class ViewAllPostsComponent implements OnInit {

  posts: Post[];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPost()
                           .subscribe(
                               posts => this.posts = posts, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }

}
