
// 캔버스 세팅
const canvas = document.getElementById("canvasSetting");
const ctx = canvas.getContext('2d');

// convas 사이즈 , Pixel manipulating size
// css는 눈에 보이는 사이즈 이고 여기서 지정해주는 사이즈는 픽셀사이즈
canvas.width = 600;
canvas.height = 600;

// 바탕색 default 설정
ctx.fillStyle="white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//context default 설정
//선의 색, 채우기 색, 선의 굵기
ctx.strokeStyle="#2c2c2c";
ctx.fillStyle="#2c2c2c";
ctx.lineWidth=2.5;

//-----------------------------------------------------
// range 이벤트 설정
// (슬라이드 바를 조정하여 범위 내의 숫자를 선택할 수 있는 입력 필드)
// step : <input> 요소에 입력할 수 있는 숫자들 사이의 간격
const range = document.getElementById("brushSize");

function handleRangeChange(event) {
    const rangeValue = event.target.value;
    ctx.lineWidth = rangeValue;
}

if(range) {
    range.addEventListener("input", handleRangeChange);
}

//-----------------------------------------------------
// fill, brush 선택버튼 이벤트 설정
const mode = document.getElementById("fillBtn");

// let painting = false;
let filling = false;

if(mode) {
    mode.addEventListener("click", function(){
        if(filling === true) {            // == Equal Operator은 값만 비교 , === Strict Equal Operator은 값,데이터 타입까지 비교
            filling = false;              // 채우기 실행?
            mode.innerText = "Fill"       // innerText : 텍스트만 가져오기
        } else {
            filling = true;
            mode.innerText = "brush"
        }
    });
}

// -----------------------------------------------------
// clear 버튼 이벤트 설정
const clear = document.getElementById("clearBtn");

if (clear) {
    clear.addEventListener("click", function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);   // 픽셀정리
        ctx.beginPath();                                    // 컨텍스트 리셋
    });
}

// -----------------------------------------------------
// save 버튼 이벤트 설정
const saveBtn  = document.getElementById("saveBtn");

function handleSaveClick() {
    const image = canvas.toDataURL();       // canvas의 이미지를 데이터로 변환
    
    // var fullQuality = image.replace(/^data:image\/png;base64,/, "1.0");     // 이미지 품질 높이기
    // var mediumQuality = image.replace(/^data:image\/png;base64,/, "0.5");   // 이미지 품질 낮추기
    // var lowQuality = image.replace(/^data:image\/png;base64,/, "0.1");      // 이미지 품질 낮추기

    // .createElement()는 요소를 생성하는 함수
    const link = document.createElement("a");      // 링크 생성, <a> </a>, saveBtn에 a태그 속성 추가
    link.href = image;                             // href : 링크의 주소
    link.download = "MySketchBook";                // download : 다운로드 파일 이름
    link.click();                                  // click : 링크를 클릭하는 함수
}


if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}

// -----------------------------------------------------
// color 선택버튼 이벤트 설정

const colorControl = document.getElementsByClassName("colorControl");

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

// Array.from()
// - 객체를 배열로 변환
// - 반환값 : 원래 배열의 값을 복사한 새로운 array 인스턴스

Array.from(colorControl).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

// // 화살표 함수를 사용하면 이벤트 핸들러 함수에서 this를 사용할 수 있다.
// // this는 이벤트가 발생한 요소를 가리킨다.
// var d = function (a, b) {
//      console.log( a * b )
// };

// let d = (a, b) => { console.log( a * b ) };

// (매개변수) => { 본문 }