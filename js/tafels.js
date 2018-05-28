var uitkomst;
var teller = 1;
var teller2 = 2;
var max = 101;
var getal;
var tot;
function Tafels() {
getal = 0;
uitkomst = "";
tot = 0;
document.getElementById("antwoordTafels").innerHTML = '';
  tot = document.getElementById("tot").value;
  tot++;
  getal = document.getElementById("getal").value;
if (getal > max-1) {
  alert("voer een getal onder de 101 in!");
}
if(teller == tot){
  teller = 1;
  document.getElementById("antwoordTafels").innerHTML = " ";
}
else{
  while (teller < tot){
    uitkomst += teller + "x" + getal + " = " + getal * teller + "<br>";
    teller++;
    document.getElementById("antwoordTafels").innerHTML = uitkomst;
    document.getElementById("antwoordTafels").style.overflow = "auto";
    document.getElementById("textWeg").innerHTML = " ";
  }
}
}
