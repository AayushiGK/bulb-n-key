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
  public img_base = "https://live.staticflickr.com/{{server-id}}/{{id}}_{{secret}}_{size-suffix}.jpg"
  ngOnInit(): void {
    this.getPhotos()
  }

  public getPhotos() {
    this.pullPhotoService.getPhotos((data: any) => {
      this.Photos = data;
    }, (err) => {
      console.log(err.stack);
    });
  }
}
