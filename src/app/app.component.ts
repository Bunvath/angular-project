import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ly';
  post = {
    title: "Title",
    isFavorite:false
  }
  onFavoriteChange(isFavorite:any){
    console.log("Favourite change",isFavorite);
    console.log(isFavorite)
  }
}
