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
  public allImages = [
    { id: "1", name: "Heel", src: "https://cdn.webshopapp.com/shops/178199/files/274798519/1000x1300x2/coco-timberland-high-heels-lace-up-with-platform.jpg", date: "" },
    { id: "2", name: "Dress", src: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/06/17/fn_microfiber-cloths-opener_s4x3.jpg.rend.hgtvcom.406.305.suffix/1592410292153.jpeg", date: "" },
    { id: "3", name: "Cosmetic", src: "https://cf.ltkcdn.net/fashion-history/images/std/210826-666x450-Set-of-cosmetics.jpg", date: "" },
    { id: "4", name: "Shoes", src: "https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5ef38dfcaeb26931757f8a23/-288Wx360H-461205977-grey-MODEL.jpg", date: "" }
  ];
  ngOnInit(): void {
    this.getPhotos()
  }
  routed(event) {
    this.router.navigateByUrl(['/pull-photos/'] + event)
    console.log('event  ', event)
  }

  public getPhotos() {
    this.pullPhotoService.getPhotos((data: any) => {
      console.log('data ----- ', data);
    }, (err) => {
      console.log(err.stack);
      // this.toastrService.pop("error", "Unable to Fetch");
    });
  }
}
