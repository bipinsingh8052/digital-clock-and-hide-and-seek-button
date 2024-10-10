// let input =document.querySelector("#input");
// let icon =document.querySelector("#icon");
// console.log(input,"\\n",icon);
// let count=0;
// let from =document.querySelector("form");
// console.log(from);
// icon.addEventListener("click",function(e){
//     let button =document.querySelector("form del");
//     console.log(button);
//     count=count+1;
//     if(input.type === "password"){
//         input.type="text";
//         button.innerHTML=`<i id="icon" class="fa-solid fa-eye-slash"></i>`
//     }
//     else{
//         input.type="password";
//         button.innerHTML=`<i id="icon" class="fa-solid fa-eye"></i>`
//     }
    
//     e.preventDefault();
// })

// stop watch

let timer =document.querySelector(".timer");
let min=document.querySelector(".min");
let hour=document.querySelector('.hour');
let sec =document.querySelector('.sec');
let a=0;
    let b=0;
    let c=0;
function run (){
    
    c++;
    if(c==60){
        c=0;
        b++;
    }
    if(b==60){
        b=0;
        a++;
    }
    c=(c<10)?"0"+c:c;
    // b=(b<10)?"0"+b:b;
    hour.textContent=a;
    sec.textContent=c;
    min.textContent=b;

}
let stop=document.querySelector(".stop");
let play =document.querySelector(".play");
let reset =document.querySelector(".reset");
let non=null;
function playbtn(){
        if(non!==null){
           clearInterval(non);
           console.log(non);
        }
       non=setInterval(run,1000);
    
    // console.log("n");
    // none=0;
    console.log(non,"hell");
    
}
function stopbtn(){
    clearInterval(non);
    console.log(non);
}
function resetbtn(){
    clearInterval(non);
    // let min=document.querySelector(".min");
    // let hour=document.querySelector('.hour');
    // let sec =document.querySelector('.sec');
    a=0;
    b=0;
    c=0;
    hour.textContent=a;
    sec.textContent=c;
    min.textContent=b;
    stopbtn();

}


let diH=document.querySelector(".hours");
let diM=document.querySelector(".mintues");
let diS=document.querySelector(".seconds");
console.log(diH,diM,diS);
setInterval(()=>{
    let currentTime=new Date();
    diH.textContent = currentTime.getHours();
    diM.textContent=currentTime.getMinutes();
    diS.textContent= currentTime.getSeconds();
    // let h=0;
    // let m=0;
    // let s=0;
    // s++;
    // if(s==60){
    //     m++;
    // }
    // if(m==60){
    //     h++;
    // }

},1000)
console.log(diH,diM,diS);