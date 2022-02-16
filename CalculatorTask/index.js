let operationh = document.getElementById("operationh");
let resulth = document.getElementById("resulth");
let count;
let darkMode=document.getElementById("darkMode");
let part2=document.getElementById("part2");
let part1=document.getElementById("part1");
let b7=document.getElementById("btn7");
let b8=document.getElementById("btn8");
let b9=document.getElementById("btn9");
let b6=document.getElementById("btn6");
let b5=document.getElementById("btn5");
let b4=document.getElementById("btn4");
let b3=document.getElementById("btn3");
let b2=document.getElementById("btn2");
let b1=document.getElementById("btn1");
let b0=document.getElementById("btn0");
let bd=document.getElementById("btnd");
let be=document.getElementById("btne");
let bc=document.getElementById("btnc");
let bv=document.getElementById("btnv");
let bp=document.getElementById("btnp");
let bm=document.getElementById("btnm");
function Digits(num) {
    operationh.innerHTML+=num;
    count++;
}
function Operator(ope) {
    if(count!=0){
        operationh.innerHTML+=ope;
    }
}
function Clear() {
    operationh.innerHTML = null;
    resulth.innerHTML = null;
}
function Equal() {
    try {
        resulth.innerHTML=eval(operationh.innerHTML);
    } catch (error) {
    }
    count=null;
}
function Clear2(){
    operationh.innerHTML = operationh.innerHTML.replace(/.$/, '');
}
countt=0;
function DarkMode(){
    ++countt;
   
    if(countt%2==0){
       
        part2.style.backgroundColor="white";
        part1.style.backgroundColor="#d7d7d7";
        b7.style.color="black";
        b6.style.color="black";
        b5.style.color="black";
        b8.style.color="black";
        b9.style.color="black";
        b8.style.color="black";
        b4.style.color="black";
        b3.style.color="black";
        b2.style.color="black";
        b1.style.color="black";
        b0.style.color="black";
        be.style.color="black";
        bc.style.color="black";
        bd.style.color="black";
        bm.style.color="black";
        bp.style.color="black";
        bv.style.color="black";

    }
    else{
        part2.style.backgroundColor="#374352";
        part1.style.backgroundColor="#374352";
        b7.style.color="white";
        b6.style.color="white";
        b5.style.color="white";
        b8.style.color="white";
        b9.style.color="white";
        b8.style.color="white";
        b4.style.color="white";
        b3.style.color="white";
        b2.style.color="white";
        b1.style.color="white";
        b0.style.color="white";
        be.style.color="white";
        bc.style.color="white";
        bd.style.color="white";
        bm.style.color="white";
        bp.style.color="white";
        bv.style.color="white";
        
    }
 


    
      
  

}