import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  title: string;
  body: string;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(item => this.posts = item);
  }

  submitPost = () => {
    const post = {
      title: this.title,
      body: this.body
    };

    this.postsService.addPost(post).subscribe(item => this.posts.unshift(item));
  }

}
