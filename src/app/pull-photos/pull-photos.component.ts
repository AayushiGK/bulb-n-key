import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PullPhotosService } from './pull-photos.service';

@Component({
  selector: 'app-pull-photos',
  templateUrl: './pull-photos.component.html',
  styleUrls: ['./pull-photos.component.css']
})
export class PullPhotosComponent implements OnInit {

  constructor(private pullPhotoService: PullPhotosService, private router: Router) { }
  public Photos;
  public PhotoGallery;
  public isNextAvail = true;
  public isPreviousAvail = false;
  public pageNo = 1;
  // public rating;
  public img_base = "https://live.staticflickr.com/{{server-id}}/{{id}}_{{secret}}_{size-suffix}.jpg"

  ngOnInit(): void {
    this.getPhotos(this.pageNo);
  }

  public getPhotos(pageNo) {
    if (pageNo != 1) {
      this.isPreviousAvail = true;
    } else if (pageNo == 1) {
      this.isPreviousAvail = false;
    }
    this.pullPhotoService.getPhotos(pageNo, (data: any) => {
      this.PhotoGallery = data.photos;
      console.log('PhotoGallery ', this.PhotoGallery)
      this.Photos = this.PhotoGallery.photo;
    }, (err) => {
      console.log(err.stack);
    });
  }

  previousPage(event) {
    if (this.PhotoGallery.page != 1) {
      this.PhotoGallery.page = this.PhotoGallery.page - 1;
      this.getPhotos(this.PhotoGallery.page);
    }
  }

  nextPage(event) {
    if (this.PhotoGallery.pages != this.PhotoGallery.page) {
      this.PhotoGallery.page = this.PhotoGallery.page + 1;
      this.isNextAvail = true;
      this.getPhotos(this.PhotoGallery.page);
    }
  }
}
