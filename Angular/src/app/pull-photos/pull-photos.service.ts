import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class PullPhotosService {
  private setHeaders() {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
    });
    return headers;
  }
  constructor(public http: HttpClient, private configUrl: ConfigService) { }

  getPhotos(callback, errCallback) {
    const options = { 'headers': this.setHeaders() };
    this.http.get(this.configUrl.url + '/getPhotos', options).subscribe((data: any) => {
      callback(data);
    }, err => {
      errCallback(err);
    });
  }
}