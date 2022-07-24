
var bd = document.body;
var btn_start = document.getElementById('start');
var menu_ques = document.getElementById('js-menu-question');


var minute = document.getElementById('minute');
var second = document.getElementById('second');
var m = 00;
var s = 30;
var timeout = null;

function start() {
  if (s == -1) {
    m -= 1;
    s = 59;
  }
  if (m == -1) {
    clearTimeout(timeout);
    alert('Hết giờ');
    return false;
  }
  
  // ghi thời gian ra màn hình
  minute.innerText = m.toString();
  second.innerText = s.toString();
  timeout = setTimeout(function() {
    s--;
    start();
  }, 1000);   // gọi lại hàm Start sau 1 giây
}

function stop() {      // hàm dừng bộ đếm khi chưa hết thời gian
  clearTimeout(timeout);   
}



btn_start.onclick = function() {
    btn_start.style.display = 'none';
    menu_ques.style.display = 'block';
    start();
}