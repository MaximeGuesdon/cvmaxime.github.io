
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


