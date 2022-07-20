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


// Để lấy ra được dữ liệu trong localStorage của trình duyệt ta dùng method:
// window.localStorage.getItem('key');


var html_body = document.body;
var name_user = document.getElementById('js-user-name');
var avatar_user = document.getElementById('js-user-avatar');
var avatarMain_user = document.getElementById('js-user-avatar-main');
var fullname_user = document.getElementById('js-user-fullname');

html_body.onload = function() {
    let location = parseInt(window.localStorage.getItem('flag'));
    fullname_user.innerText = list_users[location].fullname;
    name_user.innerText = list_users[location].username;
    avatar_user.attributes[0].value = "../../assets/images/avatar/" + list_users[location].avatar;
}



