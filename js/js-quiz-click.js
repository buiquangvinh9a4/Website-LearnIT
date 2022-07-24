
var back_input = document.getElementsByClassName("frame_input");
var inp_checkbox = document.querySelectorAll("input[type=checkbox]");

for (let i = 0; i < back_input.length; i++) {
    back_input[i].onclick = function() {
        if (inp_checkbox[i].checked == false) {
            inp_checkbox[i].checked = true;
            back_input[i].style.backgroundColor = "#FFCC00";
        } else {
            inp_checkbox[i].checked = false;
            back_input[i].style.backgroundColor = "#DDDDDD";
        }
        
    }
}