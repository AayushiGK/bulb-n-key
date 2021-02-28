import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import sha1 from 'crypto-js/sha1';
import HmacSHA1 from 'crypto-js/hmac-sha1';
import Hex from 'crypto-js/enc-hex';

@Injectable({
  providedIn: 'root'
})
export class PullPhotosService {
  public flickrSecret = '3f010af5c3d9985e';
  public consumerKey = '8d335b85269dd8fae353324adda7f666';
  public callback = 'http%3A%2F%2Flocalhost%3A4200';
  public text =
    `GET&https%3A%2F%2Fwww.flickr.com%2Fservices%2Foauth%2Frequest_token` +
    `&oauth_callback%3D` + this.callback +
    `%26oauth_consumer_key%3D` + this.consumerKey +
    `%26oauth_nonce%3D95613465` +
    `%26oauth_signature_method%3DHMAC-SHA1` +
    `%26oauth_timestamp%3D1305586162` +
    `%26oauth_version%3D1.0`;

  public key = this.flickrSecret + '&' + '';
  public hashDigest = sha1('hex' + this.text);
  public hmacDigest = Hex.stringify(HmacSHA1('path' + this.hashDigest, this.key));
  // private setHeaders() {
  //   const headers = new HttpHeaders({
  //     'content-type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, FETCH',
  //     'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
  //   });
  //   return headers;
  // }
  constructor(public http: HttpClient) {
    console.log('hmacDigest',this.hmacDigest)
    fetch(
      `https://www.flickr.com/services/oauth/request_token` +
      `%26oauth_nonce%3D95613465` +
      `%26oauth_timestamp%3D1305586162` +
      `%26oauth_consumer_key%3D` + this.consumerKey +
      `%26oauth_signature_method%3DHMAC-SHA1` +
      `%26oauth_version%3D1.0` +
      `&oauth_signature=` + this.hmacDigest +
      `&oauth_callback%3D` + this.callback
    ).then((res) => {
      console.log(res)
      res.json();
    }).then((res) => console.log('Req token', res))
  }


  getPhotos(callback, errCallback) {
    // const per_page = 20, category = 'food', api_key = '8d335b85269dd8fae353324adda7f666',secet="3f010af5c3d9985e" format = 'json';
    let API_Call = "https://api.flickr.com/services/rest?sort=date-posted-desc&parse_tags=1&content_type=7&extras=can_comment%2Ccan_print%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l&per_page=25&page=2&lang=en-US&text=food&viewerNSID=192294384%40N02&method=flickr.photos.search&csrf=1614488940%3A97rt41ovgoo%3A6ec0630f6e2c9db54a8e884e83b3f265&api_key=8d335b85269dd8fae353324adda7f666&format=json&hermes=1&hermesClient=1&reqId=8270159c&nojsoncallback=1";
    // this.http.get(API_Call).subscribe((resp: any) => {
    //   console.log(resp.photos);
    //   callback(resp);
    // }, err => {
    //   console.log(err)
    //   errCallback(err);
    // });
  }
}
