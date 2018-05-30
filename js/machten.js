var uitkomst;
var teller = 1;
var max = 101;
var getal;
var tot;

function rekenMachten() {
teller = 1;
getal = 0;
uitkomst = "";
tot = 0;
document.getElementById("antwoordMachten").innerHTML = '';
  tot = document.getElementById("tot").value;
  tot++;
  getal = document.getElementById("getal").value;
if (getal > max-1) {
  alert("voer een getal onder de 101 in!");
}

else{
  while (teller < tot){
    uitkomst += teller + " = " + Math.pow(getal, teller) + "<br>";
    teller++;
    document.getElementById("antwoordMachten").innerHTML = uitkomst;
    document.getElementById("antwoordMachten").style.overflow = "auto";
    document.getElementById("textWegMachten").innerHTML = " ";
  }
}
}
