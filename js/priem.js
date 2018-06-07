var uitkomst;
var teller = 2;
var max = 101;
var getal;
var tot;
var tellerPriem = 2;
var priemGetal1 = 2;
var priemGetal2 = 3;

function rekenPriem() {
teller = 1;
getal = 0;
uitkomst = "";
tot = 0;
document.getElementById("antwoordPriem").innerHTML = '';
  tot = document.getElementById("tot").value;
  tot++;
  getal = document.getElementById("getal").value;
  uitkomst = priemGetal1 " - " priemGetal2;
if (getal > max-1) {
  alert("voer een getal onder de 101 in!");
}

else{
  while (teller < tot){
    tellerPriem += 2;
    uitkomst += getal * teller + "<br>";
    teller++;
    document.getElementById("antwoordPriem").innerHTML = uitkomst;
    document.getElementById("antwoordPriem").style.overflow = "auto";
    document.getElementById("textWegPriem").innerHTML = " ";
  }
}
}
