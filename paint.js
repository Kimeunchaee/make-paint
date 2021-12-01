
// 캔버스 세팅
const canvas = document.getElementById("canvasSetting");
const ctx = canvas.getContext('2d');

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
        ctx.clearRect(0, 0, canvas.width, canvas.height);   //픽셀정리
        ctx.beginPath();                                    // 컨텍스트 리셋
    });
}

// -----------------------------------------------------
const saveBtn  = document.getElementById("saveBtn");