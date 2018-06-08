var uitkomst;
var teller = 1;
var max = 101;
var getal;
var tot;

function rekenTafels() {
document.getElementById("uitlegText").innerHTML = 'De Calcunator berekent nu tafels.';
teller = 1;
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

else{
  while (teller < tot){
    uitkomst += teller + "x" + getal + " = " + getal * teller + "<br>";
    teller++;
    document.getElementById("antwoordTafels").innerHTML = uitkomst;
    document.getElementById("antwoordTafels").style.overflow = "auto";
    document.getElementById("textWegTafels").innerHTML = " ";
  }
}
}
