import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class PullDetailsService {
  private setHeaders() {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
    });
    return headers;
  }
  constructor(private http: HttpClient,private configService:ConfigService) { }

  getPhotoDetails(photoId, callback, errCallback) {
    const options = {
      'headers': this.setHeaders(),
      params: new HttpParams().set('id', photoId)
    };
    this.http.get(this.configService.url + '/getDetails', options).subscribe((data: any) => {
      callback(data);
    }, err => {
      errCallback(err);
    });
  }
}
