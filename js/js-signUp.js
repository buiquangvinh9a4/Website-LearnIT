var input_text = document.querySelector('input[type="text"]');
var input_email = document.querySelector('input[type="email"]');
var input_class = document.querySelector('input[placeholder="Lớp"]');
var input_school = document.querySelector('input[placeholder="Trường"]');

var error_text = document.getElementById('js-error-text');
var error_email = document.getElementById('js-error-email');
var error_class = document.getElementById('js-error-class');
var error_school = document.getElementById('js-error-school');

var btn = document.querySelector('a[class="input-submit"]');
var form_signUp = document.getElementById('form-signup');
var form_signUp_access = document.getElementById('js-signUp-access');


var isSignUp = () => {
    if (input_text.value != '' && input_email.value != '' && input_class.value != '' && input_school.value != '' ) {
        form_signUp.style.display = 'none';
        form_signUp_access.style.display = 'block';
    } else {
        if (input_text.value == '') {
            error_text.innerText = 'Trường này không được để trống';
        } else {
            error_text.innerText = '';
        }
        if (input_email.value == '') {
            error_email.innerText = 'Trường này không được để trống';
        } else {
            error_email.innerText = '';
        }
        if (input_class.value == '') {
            error_class.innerText = 'Trường này không được để trống';
        } else {
            error_class.innerText = '';
        }
        if (input_school.value == '') {
            error_school.innerText = 'Trường này không được để trống';
        } else {
            error_school.innerText = '';
        }
    }
}

btn.addEventListener('click', isSignUp);
