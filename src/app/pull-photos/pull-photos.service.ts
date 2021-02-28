import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PullPhotosService {
  public api_key = "8d335b85269dd8fae353324adda7f666";
  public category = "food";
  public images_per_page = "20";
  constructor(public http: HttpClient) { }

  getPhotos(callback, errCallback) {
    const API = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=" + this.category + "&api_key=" + this.api_key + "&format=json&nojsoncallback=?&per_page=" + this.images_per_page + "&page=1&sort=date-taken-desc"
    this.http.get(API).subscribe((data: any) => {
      callback(data.photos.photo);
    }, err => {
      errCallback(err);
    });
  }
}