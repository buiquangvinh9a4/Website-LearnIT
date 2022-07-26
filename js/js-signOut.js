var btn_signout = document.getElementById('js-signout');
btn_signout.onclick = function () {
    window.localStorage.removeItem('flag');
    alert('Sign out');
}