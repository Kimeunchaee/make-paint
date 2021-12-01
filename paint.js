
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
