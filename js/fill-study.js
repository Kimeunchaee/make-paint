// 스타일과 색 적용하기 ---------------------------------------------------------------------

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');


    // fillStyle 그라데이션 ---------------------------------------------------------------------
        // for (var i = 0; i < 6; i++){
        //   for (var j = 0; j < 6; j++){
        //     ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
        //                      Math.floor(255 - 42.5 * j) + ', 0)';
        //     ctx.fillRect(j*25,i*25,25,25);
        //   }
        // }

    // fillStyle 사각형 ---------------------------------------------------------------------
        // ctx.fillStyle = "rgb(255, 165, 0)";
        // ctx.fillRect(10, 10, 50, 50);

    // strokeStyle 그라데이션 ---------------------------------------------------------------------
        // for (var i = 0; i < 6; i++) {
        //     for (var j = 0; j < 6; j++) {
        //     ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' +
        //                     Math.floor(255 - 42.5 * j) + ')';
        //     ctx.beginPath();
        //     ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
        //     ctx.stroke();
        //     }
        // }

    // strokeStyle 원 ---------------------------------------------------------------------
        // ctx.strokeStyle = "orange";
        // ctx.fillStyle = "blue";
        // ctx.beginPath();
        // ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        // ctx.fill();
        // ctx.stroke();

    // 투명도 globalAlpha 사용 ---------------------------------------------------------------------
        // // 배경을 그린다
        // ctx.fillStyle = '#FD0';
        // ctx.fillRect(0, 0, 75, 75);
        // ctx.fillStyle = '#6C0';
        // ctx.fillRect(75, 0, 75, 75);
        // ctx.fillStyle = '#09F';
        // ctx.fillRect(0, 75, 75, 75);
        // ctx.fillStyle = '#F30';
        // ctx.fillRect(75, 75, 75, 75);
        // ctx.fillStyle = '#FFF';

        // // 투명값을 설정한다
        // ctx.globalAlpha = 0.2;

        // // 반투명한 원을 그린다
        // for (var i = 0; i < 7; i++){
        // ctx.beginPath();
        // ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
        // ctx.fill();
        // }

    // 투명도 rgba() 사용 ---------------------------------------------------------------------

        // // 배경을 그린다
        // ctx.fillStyle = 'rgb(255,221,0)';
        // ctx.fillRect(0,0,150,37.5);
        // ctx.fillStyle = 'rgb(102,204,0)';
        // ctx.fillRect(0,37.5,150,37.5);
        // ctx.fillStyle = 'rgb(0,153,255)';
        // ctx.fillRect(0,75,150,37.5);
        // ctx.fillStyle = 'rgb(255,51,0)';
        // ctx.fillRect(0,112.5,150,37.5);

        // // 반투명한 사각형을 그린다
        // for (var i=0;i<10;i++){
        //     ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
        //     for (var j=0;j<4;j++){
        //     ctx.fillRect(5+i*14,5+j*37.5,14,27.5)
        //     }
        // }

    // 선 두꼐 lineWidth ---------------------------------------------------------------------
        // for (var i = 0; i < 10; i++){
        //     ctx.lineWidth = 1 + i;
        //     ctx.beginPath();
        //     ctx.moveTo(5 + i * 14, 5);
        //     ctx.lineTo(5 + i * 14, 140);
        //     ctx.stroke();
        //   }

        // // 한개 그리기(세로)
        // ctx.lineWidth = 5;
        // ctx.beginPath();
        // ctx.moveTo(10, 5);
        // ctx.lineTo(10, 140);
        // ctx.stroke();

    // 선 끝점 모양 lineCap ---------------------------------------------------------------------

        //  var lineCap = ['butt','round','square'];        // 배열로 선언

        // // 안내선을 그린다
        // ctx.strokeStyle = '#09f';
        // ctx.beginPath();
        // ctx.moveTo(10, 10);
        // ctx.lineTo(140, 10);
        // ctx.moveTo(10, 140);
        // ctx.lineTo(140, 140);
        // ctx.stroke();

        // // 선을 그린다
        // ctx.strokeStyle = 'black';
        // for (var i=0; i<lineCap.length; i++){    // 배열 길이만큼 반복
        //     ctx.lineWidth = 15;
        //     ctx.lineCap = lineCap[i];            // i번째 인덱스의 값(즉,문자열)로 들어감
        //     ctx.beginPath();
        //     ctx.moveTo(25 + i * 50, 10);         // i번째 인덱스 숫자(i)가 들어감
        //     ctx.lineTo(25 + i * 50,140);         // i번째 인덱스 숫자(i)가 들어감
        //     ctx.stroke();
        // }

    // 선 연결 지점 모양 lineJoin ---------------------------------------------------------------------
        // var lineJoin = ['round', 'bevel', 'miter'];
        
        // // round : 공통 끝점을 중심으로 하는 원 모양으로
        // // bevel : 공통 끝점에서 세모 모양으로
        // // miter : 기본값, 바깥쪽 테두리 선을 각각 연장하여 교차된 점으로 생긴 마름모꼴 모양으로

        // ctx.lineWidth = 10;
        // for (var i=0;i<lineJoin.length;i++){
        //     ctx.lineJoin = lineJoin[i];
        //     ctx.beginPath();
        //     ctx.moveTo(-5, 5 + i * 40);
        //     ctx.lineTo(35, 45 + i * 40);
        //     ctx.lineTo(75, 5 + i * 40);
        //     ctx.lineTo(115, 45 + i * 40);
        //     ctx.lineTo(155, 5 + i * 40);
        //     ctx.stroke();
        // }

    // miterLimit 속성 ---------------------------------------------------------------------
        // 끝점이 만나는 지점과 테두리 연장선이 만나는 지점이 얼마나 떨어져 있을지를 결정
        // 선의 두께에 따라, 어느 정도까지 뾰족해질 수 있는지가 계산됩니다.
        // 그래서 miterLimit은 현재 디스플레이 비율이나 경로의 변형 같은 것으로 각각 설정될 수 있습니다.
        // 그렇게 하여 선의 모서리에만 영향을 줍니다.
            
        // ctx.miterLimit = 30;
    
    // 선 대시 ---------------------------------------------------------------------

        // var offset = 0;

        // function draw() {
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     ctx.setLineDash([4, 2]);
        //     ctx.lineDashOffset = -offset;
        //     ctx.strokeRect(10, 10, 100, 100);
        // }
        
        // function march() {
        //   offset++;
        //   if (offset > 60) {        // 이동하는 거리? 선의 대시 배열이 어디서 시작될지 지정
        //     offset = 0;
        //   }
        //   draw();
        //   setTimeout(march, 60);      // 속도
        // }
        
        // march();
    
    // 안움직이는거 + 스타일 적용 연습 ---------------------------------------------------------------------
        //   var offset = 0;

        //   ctx.clearRect(0, 0, canvas.width, canvas.height);
        //   ctx.lineWidth = 4;
        //   ctx.strokeStyle = '#09f';
        //   ctx.setLineDash([13, 20]);
        //   ctx.lineDashOffset = -offset;
        //   ctx.strokeRect(10, 10, 150, 100);

}
