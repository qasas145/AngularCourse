import { Component, OnDestroy, OnInit } from '@angular/core';
import { dataService } from '../g-service.service';
import { Post } from '../post';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers : [dataService]
})
export class PostsComponent implements OnInit, OnDestroy{
  posts : Post[] = [];
  subscription! : Subscription;
  constructor(private _postsService : dataService){}
  ngOnDestroy(): void {
    console.log("destroying the subscription");
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription = this._postsService.getPosts().subscribe({
      next : (result)=>{this.posts = result;console.log(result)},
      error : (error)=>console.log(error),
      complete : ()=>console.log("getting posts has been completed")
    })
  }
  
}
