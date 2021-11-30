// 렌더링 컨텍스트, 지원여부 검사
// getContext() 메서드를 이용해서 그리기 함수들을 사용한다고 선언
function draw() {
    
    // 캔버스 설정
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      // 사각형 그리기 ---------------------------------------------------------------------
        // ctx.fillStyle = 'rgb(200,0,0)';   // 색상 설정
        // ctx.fillRect (10, 10, 60, 30);    // 좌표(10,10)에서 크기(50,50)의 사각형을 채운다.

        // ctx.fillRect(25, 25, 100, 100);
        // fillRect(x, y, width, height)
        // 색칠된 직사각형

        // ctx.strokeRect(50, 50, 50, 50);
        // strokeRect(x, y, width, height)
        // 직사각형 윤곽선

        // ctx.clearRect(45, 45, 60, 60);
        // clearRect(x, y, width, height) (en-US)
        // 특정 부분을 지우는 직사각형, 이 지워진 부분은 완전히 투명

      // 삼각형 그리기 ---------------------------------------------------------------------
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
        // fill() 은 열린 도형은 자동으로 닫히게 되므로 closePath() 사용X
        // stroke() 에는 적용되지 않음
    }
  }