let count=0
const display=document.getElementById("zero")
display.innerText=0      


function increase(){
count=count+1
display.innerText=count
}

function decrease(){
count=count-1
display.innerText=count
}

function reset(){
count=0
display.innerText=count
}