var _ = require("lodash");
var router = require("express").Router();
var crypto = require("crypto");
const fetch = require('node-fetch');
module.exports = function (arrg) {
  router.get("/getPhotos", (req, res, next) => {
    const flickrSecret = '3f010af5c3d9985e';
    const consumerKey = '8d335b85269dd8fae353324adda7f666';
    const callback = 'http%3A%2F%2Flocalhost%3A4200';
    var sign;
    const text =
      `GET&https%3A%2F%2Fwww.flickr.com%2Fservices%2Foauth%2Frequest_token` +
      `&oauth_callback%3D` + callback +
      `%26oauth_consumer_key%3D` + consumerKey +
      `%26oauth_nonce%3D95613465` +
      `%26oauth_signature_method%3DHMAC-SHA1` +
      `%26oauth_timestamp%3D1305586162` +
      `%26oauth_version%3D1.0`;
    const key = flickrSecret + '&' + '';
    var sign = crypto.createHmac('sha1', key).update(text).digest('hex');
    console.log(sign)
    fetch(
      `https://www.flickr.com/services/oauth/request_token` +
      `?oauth_nonce=95613465` +
      `&oauth_timestamp=1305586162` +
      `&oauth_consumer_key=` + consumerKey +
      `&oauth_signature_method=HMAC-SHA1` +
      `&oauth_version=1.0` +
      `&oauth_signature=` + sign +
      `&oauth_callback=` + callback
    )
      .then((res) => {
        console.log(res);
        res.text()
      })
      .then((res) => console.log('Req token', res));

    // const per_page = 20, category = 'food', api_key = '8d335b85269dd8fae353324adda7f666',secet="3f010af5c3d9985e", format= 'json';
    // let API_Call = "https://api.flickr.com/services/rest?sort=date-posted-desc&parse_tags=1&content_type=7&extras=can_comment%2Ccan_print%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l&per_page=25&page=2&lang=en-US&text=food&viewerNSID=192294384%40N02&method=flickr.photos.search&csrf=1614488940%3A97rt41ovgoo%3A6ec0630f6e2c9db54a8e884e83b3f265&api_key=8d335b85269dd8fae353324adda7f666&format=json&hermes=1&hermesClient=1&reqId=8270159c&nojsoncallback=1";
    fetch(
      API_Call
    ).then(resp => { return res.send({ 'data': resp }) })
  });


  router.get("/getDetails", (req, res, next) => {
    var id = req.query.id;
    fetch(
      `https://www.flickr.com/services/oauth/request_token` +
      `?oauth_nonce=95613465` +
      `&oauth_timestamp=1305586162` +
      `&oauth_consumer_key=` + consumerKey +
      `&oauth_signature_method=HMAC-SHA1` +
      `&oauth_version=1.0` +
      `&oauth_signature=` + sign +
      `&oauth_callback=` + callback +
      `id` + id
    ).then(resp => {
      return res.send({ 'data': resp })
    })
  })

  return router;
}
