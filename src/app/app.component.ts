import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-ly';
  // post = {
  //   title: "Title",
  //   isFavorite:false
  // }
  // onFavoriteChange(isFavorite:any){
  //   console.log("Favourite change",isFavorite);
  //   console.log(isFavorite)
  // }
  // course = [1,2]
  viewMode = 'list';
  changinToList(){
    this.viewMode = 'list'
  }
  changinToMap(){
    this.viewMode='map'
  }
  courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
    
  ]
  onAdd(){
    this.courses.push({id:4,name:'course4'});
  }
  onRemove(course:any){
    let index = this.courses.indexOf(course)
    this.courses.splice(index,1)
  }
  onChange(course:any){
    course.name = "update"
    

  }
  loadCourse(){
    this.courses = [
      {id:1,name:'course1'},
      {id:2,name:'course2'},
      {id:3,name:'course3'},
    ];
  }
  trackCourse(index:any,course:any){
    return course ? course.id : undefined

  }
  task = { 
    title:'review application',
    assigne:{
      name:'John smith'
    }
  }

}
  

