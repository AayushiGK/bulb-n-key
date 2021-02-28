import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    NgbRatingConfig
  ]
})
export class PullPhotosModule { }
