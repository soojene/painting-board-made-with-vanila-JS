const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");

ctx.strokeStyle = "#000000";
ctx.lineWidth = 2.5;

let painting = false;

//캔버스 태그에 사이즈를 입력하면 따로 사이즈를 주지 않아도 작동되는듯함.
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
}

function startPainting (event){
    painting = true;
}

//onMouseMove함수에서 x값과 y값이 계속 바뀌기 때문에 이 함수안에서 코드 작성을 한다.
//마우스를 누를때 라인이 그려져야해서 조건문으로 작성.
function onMouseMove(event){
    const x = event.offsetX; //offsetX은 캔버스안의 마우스 X위치
    const y = event.offsetY;

    if (!painting){
        ctx.beginPath(); //선을 그릴때 시작해야 하는 함수
        // ctx.moveTo(x, y);//선(path)의 시작지점
        } else {
        ctx.lineTo(x, y); //선 시작점에서 연결되는 마무리지점.
        ctx.stroke(); // 아웃라인으로 선(path)을 표시할때 사용
    }
}

function ChangeColorHandler(event){
    const lineColor = event.target.style.backgroundColor;
    ctx.strokeStyle = lineColor;
}

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color=>
    color.addEventListener("click",ChangeColorHandler)
    );

