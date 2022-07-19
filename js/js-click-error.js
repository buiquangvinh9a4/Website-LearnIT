var btn_sm = document.getElementById('js-submit');
var menu = document.getElementById('js-menu');
var menu_hide = document.getElementById('js-menu-hidden');
var input1 = document.querySelector('input[type="text"]');
var input2 = document.querySelector('textarea[name="info"]');



btn_sm.onclick = function() {
    var tb1 = document.getElementById('js-error-1');
    var tb2 = document.getElementById('js-error-2');
    if (input1.value=='') {
        tb1.innerText = "Vui lòng nhập nội dung!";
    }
    if (input2.value=='') {
        tb2.innerText = "Vui lòng nhập nội dung!";
    }
    if (input1.value!='' && input2.value !='') {
        menu.style.display = 'none';
        menu_hide.style.display = 'block';
    }
}

var btn_back = document.getElementById('js-back');
btn_back.onclick = function() {
    history.go(-2);      // quay lại trang trước đó 2 lần
};