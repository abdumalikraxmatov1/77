const eye=document.getElementById("eye")
const momde=document.getElementById("modme")
const parol=document.getElementById("parol")
const btn=document.getElementById("btn")
const err=document.getElementById("err")


eye.addEventListener("click", ()=>{
    if(parol.type=="password"){
        parol.type="text"
    }else{
        parol.type="password"
    }
})


parol.addEventListener("input",()=>{
    if(momde.value.trim().length>3 && parol.value.trim().length>3){
         btn.disabled=false;
         btn.style.backgroundColor="orangered"
    }else{
         btn.disabled=true;
         btn.style.backgroundColor="#f69e86"
    }
});

btn.addEventListener("click",()=>{
    if(parol.value='1234' && momde.value=='qqqq'){
        err.style.display="none"
        window.location.href="./home.html";
        localStorage.setItem("parol","1234")
        localStorage.setItem("modme-id","qqqq")
    }else{
        err.style.display="block"
    }
})