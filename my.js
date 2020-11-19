let arr = [];
let player = 1;
function init() {
    let html = '';
    for (let i = 0; i < 3; i++) {
        html += '<tr>';
        arr[i] = [];
        for (let j = 0; j < 3; j++) {
            arr[i][j] = '*'
            html += '<td onclick="play()" id="'+i+'-'+j+'">';
            html += '</td>';
        }
        html += '</tr>';
    }
    document.getElementById('game-board').innerHTML = html;
}
init();

function play() {
    let x = +prompt('Nhap vi tri hang: ');
    let y = +prompt('Nhap vi tri cot: ');
    if (player == 1) {
        arr[x][y] = 'O';
        document.getElementById(x + '-' + y).innerHTML = 'O'
        player = 2;
    } else {
        arr[x][y] = 'X';
        document.getElementById(x + '-' + y).innerHTML = 'X'
    }
    console.log(arr)
}

