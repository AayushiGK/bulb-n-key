import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PullDetailsService {
  public api_key = "8d335b85269dd8fae353324adda7f666";
  constructor(private http: HttpClient) { }

  getPhotoDetails(photoId, callback, errCallback) {
    const API = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + this.api_key + "&format=json&nojsoncallback=?&photo_id="+photoId;
    this.http.get( API).subscribe((data: any) => {
      callback(data.photo);
    }, err => {
      errCallback(err);
    });
  }
}
