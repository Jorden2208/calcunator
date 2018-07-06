function rekenPriem(){
  i = 2;
  x= 2;
  document.getElementById("antwoordPriem").innerHTML = "";
  var maxGetal = document.getElementById('tot').value
    for(i=2; i<= maxGetal; i++) {

      var IsPrime = true;

      for(x = 2; x < i; x++){

        if(i % x == 0){
          IsPrime = false;
        }
      }

      if(IsPrime == true){
        document.getElementById("antwoordPriem").innerHTML += i + "<br>";
      }
  }


document.getElementById("textWegPriem").innerHTML = " ";
document.getElementById("antwoordPriem").style.overflow = "auto";
}
