var uitkomst = "";
var teller = 1;
var teller2 = 2;
var max = 101;
var getal = "";
var tot = 101;
var niks = " ";
function krijgGetal() {
  tot + 10;
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
