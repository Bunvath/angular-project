import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  log(x:any){
    console.log(x)
  }
  submit(f:any){
    console.log(f)
    console.log(f.value?.comment)
  }
  contactMethods = [
    {id:1,name:'Email1'},
    {id:2,name:'Email2'},
    {id:3,name:'Email3'}
  ]
}
