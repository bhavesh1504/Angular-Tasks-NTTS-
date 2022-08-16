import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appWhiteblack]'
})
export class WhiteblackDirective {

  constructor(private element : ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.element.nativeElement.innerText)
    if(this.element.nativeElement.innerText == "Violet"){
      this.element.nativeElement.style.color = "violet";
    }else if(this.element.nativeElement.innerText == "Indigo"){
      this.element.nativeElement.style.color = "indigo";
    }else if(this.element.nativeElement.innerText == "Blue"){
      this.element.nativeElement.style.color = "blue";
    }else if(this.element.nativeElement.innerText == "Green"){
      this.element.nativeElement.style.color = "green";
    }else if(this.element.nativeElement.innerText == "Yellow"){
      this.element.nativeElement.style.color = "yellow";
    }else if(this.element.nativeElement.innerText == "Orange"){
      this.element.nativeElement.style.color = "orange";
    }else if(this.element.nativeElement.innerText == "Red"){
      this.element.nativeElement.style.color = "red";
    }
  }

  
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = 'black';
  }

}
