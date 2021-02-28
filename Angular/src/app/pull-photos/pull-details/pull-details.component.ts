import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PullDetailsService } from './pull-details.service';

@Component({
  selector: 'app-pull-details',
  templateUrl: './pull-details.component.html',
  styleUrls: ['./pull-details.component.css']
})
export class PullDetailsComponent implements OnInit {

  constructor(public fb: FormBuilder, private detailService: PullDetailsService, public route: ActivatedRoute) { }

  public reviewForm: FormGroup;
  public photoDetails;
  public ratingParam = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getPhotoDetails(params.id);
    });
    this.reviewForm = this.fb.group({
      ratingParam: ['', Validators.compose([Validators.required])],
      user: ['', Validators.compose([Validators.required])],
      remark: ['', Validators.compose([Validators.required])]
    });
  }

  public getPhotoDetails(photoId) {
    this.detailService.getPhotoDetails(photoId, (data: any) => {
      this.photoDetails = data;
      console.log('this.photoDetails',this.photoDetails)
    }, (err) => {
      console.log(err.stack);
    });
  }

  setAction(formValues) {
    alert("User: " + formValues.user + " Gave " + formValues.ratingParam + " Rating saying " + formValues.remark);
  }

}
