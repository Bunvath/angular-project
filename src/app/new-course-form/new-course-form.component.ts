import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['',Validators.required],
      contact:fb.group({
        email:[],
        phone:[]
      }),
      topics: fb.array([])
    })
   }

  ngOnInit(): void {
  }
  form
  // form = new FormGroup({
  //   name:new FormControl('',Validators.required),
  //   contact: new FormGroup({
  //     email:new FormControl(),
  //     phone:new FormControl(),
  //   }),
  //   topics:new FormArray([])
  // });
  addToArray(topic:any){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value))
  }
  get getArray(){
    return (this.form.get('topics') as FormArray).controls
  }
  removeElement(topic:any){
    (this.form.get('topics') as FormArray).removeAt(topic)

  }


}
