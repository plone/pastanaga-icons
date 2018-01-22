import {
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
    ChangeDetectionStrategy } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OnInit } from '@angular/core';

const defaultSize = '24px';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[icon], icon',
  template: `
  <svg
    [attr.viewBox]="name.attributes.viewBox"
    [attr.xmlns]="name.attributes.xmlns"
    [innerHTML]="svgContent"
    [style.height]="height"
    [style.width]="'auto'"
    [style.fill]="color"
    >
  </svg>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}

  svgContent: SafeHtml;
  defaultSize = defaultSize;
  height: string;

  @Input() color: string;
  @Input() size: string;
  @Input() name;

  ngOnInit() {
    this.svgContent = this.sanitizer.bypassSecurityTrustHtml(this.name.content);
    this.height = this.size ? this.size : defaultSize;
  }

}
