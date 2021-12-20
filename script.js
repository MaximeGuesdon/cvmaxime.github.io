
var i=0;

function typeWriter(txt,speed) {
    var speed = 25;
    var txt = "Après une formation en BTS SIO option SLAM (Solutions logicielles et Applications métier), j'ai décidé de travailler dans les métiers du numérique et de continuer mon apprentissage du code afin de devenir le plus rapidement possible développeur."
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
function video(){


  var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
  function loadVideo(iframe){
  $.getJSON( reqURL + iframe.getAttribute('cid'),
  function(data) {
  var videoNumber = (iframe.getAttribute('vnum')?Number(iframe.getAttribute('vnum')):0);
  console.log(videoNumber);
  var link = data.items[videoNumber].link;
  id = link.substr(link.indexOf("=") + 1);
  iframe.setAttribute("src","https://youtube.com/embed/"+id + "?controls=0&autoplay=1");
  }
  );
  }
  var iframes = document.getElementsByClassName('latestVideoEmbed');
  for (var i = 0, len = iframes.length; i < len; i++){
  loadVideo(iframes[i]);
  }

}
  