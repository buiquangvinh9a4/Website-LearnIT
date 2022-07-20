class Account {
    constructor(username, password, fullname, email, avatar) {
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.avatar = avatar;

    }
}

var list_users = new Array();

var user1 = new Account('vinhbq2001', '18042001', 'Bùi Quang Vinh', 'boydeptray18042001@gmail.com', 'vinh.png');
var user2 = new Account('dangtrang2k1', '11032001', 'Đặng Thị Thu Trang', 'trangyeol2001@gmail.com', 'default.png');
var user3 = new Account('ducdung18cm', '12345678', 'Mạc Đức Dũng', 'ducdung18cmok@gmail.com', 'dung.png');
var user4 = new Account('1', '1', 'Test', 'test@gmail.com', 'default.png');

list_users.push(user1);
list_users.push(user2);
list_users.push(user3);
list_users.push(user4);



var btn_submit = document.getElementById('signIn-btn');
var username = document.querySelector('input[placeholder="Tên đăng nhập"]');
var password = document.querySelector('input[placeholder="Mật khẩu"]');
var error1 = document.querySelector('p[id="tb1"]');
var error2 = document.querySelector('p[id="tb2"]');




// Để gán 1 biến nào đó vào LocalStorage ta chỉ cần dùng lệnh: window.localStorage.setItem('key', 'value')
// Với key là tên biến để ta truy xuất và value là giá trị biến truyền vào.

var isTrueAccount = () => {
    if (username.value != '' && password.value != '') {
        for (let i = 0; i < list_users.length; i++) {
            if (list_users[i].username == username.value && list_users[i].password == password.value) {
                window.localStorage.setItem('flag', i);   // chú thích bên trên
                return i;
            }
        }
    } else {
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
    }
}
var isLogin = () => {
    var x = isTrueAccount();
    if (x != undefined) {
        btn_submit.attributes[0].value = 'Khoahoc.html';
    } else if (username.value != '' && password.value != '') {
        error1.innerText = '';
        error2.innerText = '*Tên tài khoản hoặc mật khẩu chưa chính xác.';
    }
}
btn_submit.addEventListener('click', isLogin);













// btn_submit.onclick = function() {
//     if (username.value == '') {
//         error1.innerText = '*Thông tin này không được để trống';
//     } else {
//         error1.innerText = '';
//     }
//     if (password.value == '') {
//         error2.innerText = '*Thông tin này không được để trống';
//     }  else {
//         error2.innerText = '';
//     }
//     check_account = false;
//     if (username.value != '' && password.value != '') {
//         for (let i = 0; i < list_users.length; i++) {
//             if (list_users[i].username == username.value && list_users[i].password == password.value) {
//                 check_account = true;
//                 console.log(i);
//                 break;
//             }
//         }
//         if (check_account) {
//             btn_submit.attributes[0].value = 'Khoahoc.html';

//         } else {
//             error2.innerText = '*Tên tài khoản hoặc mật khẩu chưa chính xác.';
//         }
//     }
// }





