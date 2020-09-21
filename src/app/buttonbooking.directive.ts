import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButtonbooking]'
})
export class ButtonbookingDirective {
  @Input() defaultColor:string = "#3066bed0";
  @HostBinding('style.backgroundColor') bgcolor:string;
  constructor() { }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.bgcolor = this.defaultColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.bgcolor = "#3066be38";
  }
}
