var uitkomst;
var teller = 1;
var max = 101;
var getal;
var tot;

function rekenBreuken() {
teller = 1;
getal = 0;
uitkomst = "";
tot = 0;
document.getElementById("antwoordBreuken").innerHTML = '';
  tot = document.getElementById("tot").value;
  tot++;
  getal = document.getElementById("getal").value;
if (getal > max-1) {
  alert("voer een getal onder de 101 in!");
}

else{
  while (teller < tot){
    uitkomst += teller + ":" + getal + " = " + teller / getal + "<br>";
    teller++;
    document.getElementById("antwoordBreuken").innerHTML = uitkomst;
    document.getElementById("antwoordBreuken").style.overflow = "auto";
    document.getElementById("textWegBreuken").innerHTML = " ";
  }
}
}
