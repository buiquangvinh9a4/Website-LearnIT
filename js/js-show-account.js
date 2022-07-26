var bd = document.body;
var user_khach = document.getElementById('js-user-khach');
var user = document.getElementById('js-user');
bd.onload = function () {
    if (window.localStorage.getItem('flag') != null) {
        user_khach.style.display = 'none';
        user.style.display = 'block';
    } else {
        user_khach.style.display = 'block';
        user.style.display = 'none';
    }
}

