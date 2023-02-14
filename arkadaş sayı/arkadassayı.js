//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
var sayi1 = prompt("birinci Sayı:", "");
var sayi2 = prompt("ikinci Sayı:", "");
let tpl1=0;
let tpl2=0;
for(let i=1;i<sayi1;i++)
{ 
  if(sayi1%i==0) { 
    tpl1=tpl1+i;
  }
}
for(let i=1; i<sayi2;i++){ 
 if(sayi2%i==0){ 
  tpl2=tpl2+i;
 }
}
if(sayi1==tpl2 && sayı2==tpl1){
  console.log("2 sayı arkadaştır")
}else{
  console.log("2 sayı arkadaş değildir")
}