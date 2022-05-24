import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[highlighted]',
  // Make available to template using export
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighLighted = false;

  @Output()
  toggleHighlight = new EventEmitter();


  constructor() { 

    console.log("Custom directive created");
  }

  // Apply highlighted directive to className DOM property using @HostBinding (must be to known DOM property)
  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted'
  // }

  // Solution 2 - Conditional approach to @HostBinding class - if true apply class
  // @HostBinding('class.highlighted')
  // get cssClasses() {
  //   return true;
  // }

  // Solution 3 - Using the @Input property and setting the 'true' or 'false' value on to the component directly
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighLighted;
  }

  // Solution 4 - Write to DOM attr directly instead of DOM Property
  // @HostBinding('attr.disabled')
  // get disabled() {
  //   return "true";
  // }

  // @HostListener is used to interact with native DOM Events i.e mouseover / mouseleave (can also use $event to emit the event)
  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    console.log($event);
    this.isHighLighted = true;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighLighted = false;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  toggle() {
    this.isHighLighted = !this.isHighLighted;
    this.toggleHighlight.emit(this.isHighLighted);
  }

}
