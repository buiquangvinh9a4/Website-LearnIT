var bd = document.body;
var user_khach = document.getElementById('js-user-khach');
var user = document.getElementById('js-user');
bd.onload = function () {
    if (window.localStorage.getItem('flag') != null) {
        user_khach.style.display = 'none';
        user.style.display = 'block';
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
    } else {
        user_khach.style.display = 'block';
        user.style.display = 'none';
    }
}

