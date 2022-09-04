import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective implements OnInit {
  @Input()
  backgroundColor: string = 'white';
  @Input()
  color: string = 'black';
  @HostBinding('style.backgroundColor') bgColor!: string;
  @HostBinding('style.color') tColor!: string;

  constructor() {}
  ngOnInit(): void {
    this.bgColor = this.backgroundColor;
    this.tColor = this.color;
  }
}
