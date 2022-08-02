class Account {
    constructor(username, password, fullname, email, avatar, clas, school) {
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.avatar = avatar;
        this.clas = clas;
        this.school = school;

    }
}

var list_users = new Array();

var user1 = new Account('vinhbq2001', '18042001', 'Bùi Quang Vinh', 'boydeptray18042001@gmail.com', 'vinh.png', '12A4', 'THPT Uông Bí');
var user2 = new Account('dangtrang2k1', '11032001', 'Đặng Thị Thu Trang', 'trangyeol2001@gmail.com', 'default.png', '11B3', 'THPT Hồng Đức');
var user3 = new Account('ducdung18cm', '12345678', 'Mạc Đức Dũng', 'ducdung18cmok@gmail.com', 'dung.png', '10C6', 'THPT Hòn Gai');
var user4 = new Account('1', '1', 'Test', 'test@gmail.com', 'default.png', 'Hiệu trưởng', 'Trùm');
var user5 = new Account('ngatlth', '123456', 'Lê Thị Hồng Ngát', 'abc@gmail.com', 'ngat.jpg', '70A', 'Đại học Sư phạm Hà Nội');


list_users.push(user1);
list_users.push(user2);
list_users.push(user3);
list_users.push(user4);
list_users.push(user5);


// Để lấy ra được dữ liệu trong localStorage của trình duyệt ta dùng method:
// window.localStorage.getItem('key');


var html_body = document.body;
var name_user = document.getElementById('js-user-name');
var avatar_user = document.getElementById('js-user-avatar');
var fullname_user = document.getElementById('js-user-fullname');
var info_username = document.getElementById('js-info-username');
var info_fullname = document.getElementById('js-info-fullname');
var info_mail = document.getElementById('js-info-mail');
var info_class = document.getElementById('js-info-class');
var info_school = document.getElementById('js-info-school');
var info_avatar = document.getElementById('js-info-avatar');



// for (let i = 0; i < view.length; i++) {
//     let tmp = s_key + i;
//     localStorage.setItem(tmp, 0);
// }

html_body.onload = function() {


    let location = parseInt(window.localStorage.getItem('flag'));
    fullname_user.innerText = list_users[location].fullname;
    name_user.innerText = list_users[location].username;
    avatar_user.attributes[0].value = "../../assets/images/avatar/" + list_users[location].avatar;
    info_username.innerText = list_users[location].username;
    info_fullname.innerText = list_users[location].fullname;
    info_mail.innerText = list_users[location].email;
    info_class.innerText = list_users[location].clas;
    info_school.innerText = list_users[location].school;
    info_avatar.attributes[0].value = "../../assets/images/avatar/" + list_users[location].avatar;


}






