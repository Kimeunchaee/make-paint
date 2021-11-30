// 렌더링 컨텍스트, 지원여부 검사
// getContext() 메서드를 이용해서 그리기 함수들을 사용한다고 선언
function draw() {
    
    // 캔버스 설정
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

    // 사각형 그리기 fillRect() ---------------------------------------------------------------------
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
        // ctx.beginPath();
        // ctx.moveTo(75, 50);
        // ctx.lineTo(100, 75);
        // ctx.lineTo(100, 25);
        // ctx.fill();
        // fill() 은 열린 도형은 자동으로 닫히게 되므로 closePath() 사용X
        // stroke() 에는 적용되지 않음

    // 원 그리기 arc(Math.PI * 2, true) ---------------------------------------------------------------------
        // ctx.beginPath();
        // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 얼굴
        // ctx.moveTo(110, 75);
        // ctx.arc(75, 75, 35, 0, Math.PI, false);  // 입
        // ctx.moveTo(65, 65);
        // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 왼쪽 눈
        // ctx.moveTo(95, 65);
        // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 오른쪽 눈
        // ctx.stroke();

    // 선 그리기 lineTo() ---------------------------------------------------------------------
        // ctx.beginPath();
        // ctx.moveTo(25, 25);    // 시작점
        // ctx.lineTo(105, 25);   // 끝점
        // ctx.closePath();
        // ctx.stroke();          // 선 그리기

        // // Filled triangle
        // ctx.beginPath();
        // ctx.moveTo(25, 25);
        // ctx.lineTo(105, 25);
        // ctx.lineTo(25, 105);
        // ctx.fill();

        // // Stroked triangle
        // ctx.beginPath();
        // ctx.moveTo(125, 125);
        // ctx.lineTo(125, 45);
        // ctx.lineTo(80, 125);
        // ctx.closePath();
        // ctx.stroke();

    // 호 그리기 ---------------------------------------------------------------------
        // ctx.beginPath();
        // var x = 25 + 1 * 50; // x 좌표
        // var y = 25 + 1 * 50; // y 좌표
        // var radius = 20; // 반지름
        // var startAngle = 0; // 시작각도
        // var endAngle = Math.PI + (Math.PI * 1) / 2; // 끝각도
        // var anticlockwise = 10 / 2 == 6 ? false : true; // 시계, 반시계
        //  anticlockwise 는 true일 때 반시계 방향, false일 때 시계 방향

        // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        // ctx.closePath();
        // ctx.stroke();

        // for (var i = 0; i < 4; i++) {
        //     for (var j = 0; j < 3; j++) {
        //     ctx.beginPath();
        //     var x = 25 + j * 50; // x coordinate
        //     var y = 25 + i * 50; // y coordinate
        //     var radius = 20; // Arc radius
        //     var startAngle = 0; // Starting point on circle
        //     var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        //     var anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

        //     ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        //     if (i > 1) {
        //         ctx.fill();
        //     } else {
        //         ctx.stroke();
        //     }
        //     }
        // }





    }
  }