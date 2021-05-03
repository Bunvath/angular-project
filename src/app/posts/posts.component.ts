import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { BadInput } from '../common/bad-input.error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts:any[] | undefined;
  constructor(private service: PostService) {
  
  }
 

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(response => {
      this.posts = response
      console.log(this.posts)
    }
    );

  }
  addNew(titleInput:any){
    let post:any = {title:titleInput.value}
    this.posts?.splice(0,0,post)
    titleInput.value = ''
    this.service.create(post)
      .subscribe(
        response=>{
          console.log(response)
      },
        ((error:AppError)=>{
          this.posts?.splice(0,1);
          if (error instanceof BadInput){
          } 
          else throw error;

      }))
  }
  remove(i:any){
    let index:any = this.posts?.indexOf(i)
    this.posts?.splice(index,1)
    this.service.delete(i)
      .subscribe(
        response=>{
          console.log("deleted")
          
    },(
        (error:AppError)=>{
          this.posts?.splice(index,0,i)
          if (error instanceof NotFoundError){
            alert('This post has already been deleted')
          }
          else throw error;
    }))
    
  }
  update(item:any){
    this.service.update(item)
        .subscribe(
          response=>{
            console.log(response)
        },
          (error=>{
            alert('An unexpected error occurred')
            console.log(error)
        }))
  }

}
