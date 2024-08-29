let line=document.querySelector("#hamburger");
let menu=document.querySelector(".menu");
let cancel=document.querySelector("#cancel");

let x=1
line.addEventListener("click",function(){
      menu.style.display="flex";
    cancel.style.display="flex"
    line.style.display="none"
  
})

cancel.addEventListener("click",function(){
   menu.style.display="none";
    cancel.style.display="none"
    line.style.display="flex"
})