$(document).ready(function () {

    var main = $("#main");
    var url = "http://headliner.fm/exchange/account/band_summary_info";
    var url2 = "http://headliner.fm/exchange/dashboard/requests_and_notifications";
    var req = new XMLHttpRequest();
    var req2 = new XMLHttpRequest();

    req.open("GET",url,true);
    req.onload = showData;
    req.send(null);

    req2.open("GET",url2,true);
    req2.onload = showPromotion;
    req2.send(null);

    function showData() {
      resp = JSON.parse(req.responseText); 
      var photo = resp.profile_picture;
      var active_promo = resp.has_active_promo;
      $("#has_active_promo").html(" "+active_promo+" ");
      $("#band_bucks").html(resp.bandbucks);

      $("#loading").hide();
      $("#logo").append($("<img/>", {"src": photo}))
//    $("<img/>", {"src": photo}).appendTo("body");

 //    var img = document.createElement("image"); img.src = photo;
 //    document.body.appendChild(img);


    }


    function showPromotion() {
      resp2 = JSON.parse(req2.responseText);
      $("#number_of_promotions").html(resp2.data[0].num_requests);

    }

    function showPhotos() {
      var photos = req.responseXML.getElementsByTagName("photo");

      for (var i = 0, photo; photo = photos[i]; i++) {
        var img = document.createElement("image");
        img.src = constructImageURL(photo);
        document.body.appendChild(img);
      }
    }


           });
