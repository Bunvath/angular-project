import { Component, OnInit,Input,Output,EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite?: boolean
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isFavorite = !this.isFavorite
    console.log(this.isFavorite)
    this.change.emit({newValue: this.isFavorite});
  }

}
