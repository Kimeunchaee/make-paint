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
        ctx.strokeStyle = "orange";
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();




  }