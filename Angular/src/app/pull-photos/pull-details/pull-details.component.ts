import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PullDetailsService } from './pull-details.service';

@Component({
  selector: 'app-pull-details',
  templateUrl: './pull-details.component.html',
  styleUrls: ['./pull-details.component.css']
})
export class PullDetailsComponent implements OnInit {

  constructor(public fb: FormBuilder, private detailService:PullDetailsService) { }

  public reviewForm: FormGroup;
  public photoDetails;
  public image = { src:"https://cdn.webshopapp.com/shops/178199/files/274798519/1000x1300x2/coco-timberland-high-heels-lace-up-with-platform.jpg",title: 'Heels', author: 'Helen', description: "The Super Footwear which enhance the walk" }
  public ratingParam = 0;
  ngOnInit(): void {
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
    alert("User: "+formValues.user+" Gave " +formValues.ratingParam+ " Rating saying "+formValues.remark);
  }

}
