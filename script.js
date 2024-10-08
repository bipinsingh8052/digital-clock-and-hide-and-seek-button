let input =document.querySelector("#input");
let icon =document.querySelector("#icon");
console.log(input,"\\n",icon);
let count=0;
let from =document.querySelector("form");
console.log(from);
icon.addEventListener("click",function(e){
    let button =document.querySelector("form del");
    console.log(button);
    count=count+1;
    if(input.type === "password"){
        input.type="text";
        button.innerHTML=`<i id="icon" class="fa-solid fa-eye-slash"></i>`
    }
    else{
        input.type="password";
        button.innerHTML=`<i id="icon" class="fa-solid fa-eye"></i>`
    }
    
    e.preventDefault();
})