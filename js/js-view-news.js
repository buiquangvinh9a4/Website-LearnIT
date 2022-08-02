var view = document.getElementsByClassName('js-view');
var body = document.body;
var s_key = 'view';

for (let i = 0; i < view.length; i++) {
    let tmp = s_key + i;
    localStorage.setItem(tmp, 0);
}

body.onload = function ()  {
    for (let i = 0; i < view.length; i++) {
        let tmp = s_key + i;
        view[i].innerText = localStorage.getItem(tmp);
    }
}
