class Account {
    constructor(username, password, fullname) {
        this.username = username;
        this.password = password;
        this.fullname = fullname;
    }
}

var list_users = new Array();

var user1 = new Account('vinhbq2001', '18042001', 'Bùi Quang Vinh', 'boydeptray18042001@gmail.com');
var user2 = new Account('dangtrang2k1', '11032001', 'Đặng Thị Thu Trang', 'trangyeol2001@gmail.com');
var user3 = new Account('ducdung18cm', '12345678', 'Mạc Đức Dũng', 'ducdung18cmok@gmail.com');
var user4 = new Account('1', '1', 'Test', 'test@gmail.com');

list_users.push(user1);
list_users.push(user2);
list_users.push(user3);
list_users.push(user4);





var btn_submit = document.getElementById('signIn-btn');
var username = document.querySelector('input[placeholder="Tên đăng nhập"]');
var password = document.querySelector('input[placeholder="Mật khẩu"]');
var error1 = document.querySelector('p[id="tb1"]');
var error2 = document.querySelector('p[id="tb2"]');
var frame_noUser = document.getElementById('js-noUser');
var check_account;

btn_submit.onclick = function() {
    if (username.value == '') {
        error1.innerText = '*Thông tin này không được để trống';
    } else {
        error1.innerText = '';
    }
    if (password.value == '') {
        error2.innerText = '*Thông tin này không được để trống';
    }  else {
        error2.innerText = '';
    }
    check_account = false;
    if (username.value != '' && password.value != '') {
        for (let i = 0; i < list_users.length; i++) {
            if (list_users[i].username == username.value && list_users[i].password == password.value) {
                check_account = true;
                break;
            }
        }
        if (check_account) {
            btn_submit.attributes[0].value = 'Khoahoc.html';
        } else {
            error2.innerText = '*Tên tài khoản hoặc mật khẩu chưa chính xác.';
        }
    }
}