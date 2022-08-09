const btnInc = document.getElementById("btnInc");
const btnDec = document.getElementById("btnDec");
const cont = document.getElementById("cont");

let contador = 0;
cont.innerHTML = contador;

btnInc.addEventListener("click", function(){
  contador++;
  cont.innerHTML = contador;
});

btnDec.addEventListener("click", function(){
  contador--;
  cont.innerHTML = contador;

});