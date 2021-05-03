import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format:any;
  constructor(private el:ElementRef) { }
  // @HostListener('focus')
  // onFocus(){
  //   console.log("on fucus ")
  // }
  @HostListener('blur')
  onBlur(){
   let value: string = this.el.nativeElement.value;
   this.el.nativeElement.value = value.toLowerCase()
   if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase()
    else
      this.el.nativeElement.value = value.toUpperCase()
  
  }

  
  

}
