const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');

ctx.strockStyle = '#000000';
ctx.lineWidth = 2.5; 

let painting = false;

function stopPainting (){
    painting = false; 
    // console.log("stop painting");
}

function startPainting (){
    painting = true;
    // console.log("stop painting");
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log("mouse move");
}

function onMouseDown (event){
    painting = true;
    // console.log("mouse down");
}

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}