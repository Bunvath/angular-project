import { NotFoundError } from './../common/not-found-error';
import { Observable,throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, } from 'rxjs/operators';
import { AppError} from '../common/app-error';
import { BadInput } from '../common/bad-input.error';
import { Inject } from '@angular/core'
import { error } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class DataService { 
  constructor(private http:HttpClient,@Inject(String) private url:string) {
    
   }
  getAll(){

    return this.http.get<any[]>(this.url)  
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  create(resource:any){
   
    return this.http.post<any>(this.url,JSON.stringify(resource))
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  delete(resource:any){
    
    return this.http.delete(this.url+'/'+resource.id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  update(resource:any){

    return this.http.patch(this.url+'/'+resource.id,JSON.stringify({isRead:true}))
  }

  private handleError(error:Response){
    if (error.status ===404){
      return throwError(new NotFoundError(error))
    }
    else if(error.status === 400){
      return throwError(new BadInput(error))
    }
    return throwError(new AppError(error));
  }
}
