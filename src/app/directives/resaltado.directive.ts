import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') mouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') mouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }
}
