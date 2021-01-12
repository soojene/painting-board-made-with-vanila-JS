const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');

ctx.strockStyle = '#000000';
ctx.lineWidth = 2.5;

let painting = false;

//클래스이름으로 캔버스 사이즈 값을 설정할때. 이렇게 하거나 아래 함수로 해도 화면 사이즈가 바뀔때 새로고침을 해야 함..
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

// function canvasContainner (canvas){ //캔버스 사이즈를 함수로 나타 낼 경우
//     canvas.style.width = '90%';
//     canvas.style.height = '70vh';
//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;
// }
// canvasContainner(canvas);

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
    if (!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

// function onMouseDown (event){
//     painting = true;
// }

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}