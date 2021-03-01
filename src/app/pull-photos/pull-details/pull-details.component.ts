import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PullDetailsService } from './pull-details.service';
// import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pull-details',
  templateUrl: './pull-details.component.html',
  styleUrls: ['./pull-details.component.css']
})
export class PullDetailsComponent implements OnInit {

  constructor(public fb: FormBuilder, private detailService: PullDetailsService,
    public router: ActivatedRoute, private route: Router) { }
  public reviewForm: FormGroup;
  public photoDetails;
  public ratingParam = 0;
  // @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.router.params.subscribe(params => {
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
    }, (err) => {
      console.log(err.stack);
    });
  }

  setAction(formValues) {
    this.photoDetails.rating = formValues.ratingParam;
    // this.newItemEvent.emit(this.photoDetails.rating);
    alert("User: " + formValues.user + " Gave " + formValues.ratingParam + " Rating saying " + formValues.remark);
    this.route.navigate(['./pull-photos'])
  }

}
