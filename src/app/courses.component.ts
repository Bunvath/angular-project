import { Component, NgModule } from '@angular/core';

@Component({
    selector: "courses",
    template:
            `
            <button class="btn btn-primary">Save</button>
            <input  [(ngModel)]="email" (keyup.enter) = " onKeyUp()"/> 
            

    `
    
})
export class CoursesComponent{
    isActive = true;
    email = "me@example.com";

    onSave($event: any){
        $event.stopPropagation()
        console.log("button clicked",$event)
    }
    onDivClicked(){
        console.log("div was clicked")
    }
    onKeyUp(){
        console.log(this.email)
    }
    course={
        title: "The complete Angular Course",
        rating: 4.9745,
        students: 434343,
        price: 200,
        releaseDate: new Date(2016,3,1)

    }
    text=`jdsjdkaj djsadjnak dkahdajsnkanjfnjasnfkjsd fnbfsfkjhasdiufdsfbsdjkjsdbfjdsn fsdnfjsnfjndsjnndncanjdnfndknfdnfkjnajkfh cd nkj
    fdfadfsdfjk  fdjfkjslkdj fklnsdklfsdlk nfkldfklndlkfn nflnsdklnfkldnf lfkldsfkskldf lkfnsdkljfkldsmlfk lfnkldfmlksad lmfklsdmflk`
}