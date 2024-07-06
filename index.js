function colorGenerator(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intevalId
const startChangingColor=function(){
    if(!intevalId){
        intevalId=setInterval(changeColor,1000);
    }
    const body=document.querySelector("body");
    function changeColor(){
        body.style.backgroundColor=colorGenerator();
    }
}
document.querySelector("#start").addEventListener('click',startChangingColor);

const stopChangingColor=function(){
    clearInterval(intevalId)
    intevalId=null;
}
document.querySelector('#stop').addEventListener('click',stopChangingColor);
