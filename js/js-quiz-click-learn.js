
var back_input = document.getElementsByClassName("frame_input");
var inp_radio = document.querySelectorAll("input[type='radio']");

for (let i = 0; i < back_input.length; i++) {
    back_input[i].onclick = function() {
        if (!inp_radio[i].checked) {
            for (let j = 0; j < back_input.length; j++) {
                if (inp_radio[j].checked && i != j) {
                    back_input[j].style.backgroundColor = "#DDDDDD";
                }
            }
            inp_radio[i].checked = true;
            back_input[i].style.backgroundColor = "#FFCC00";
        } else {
            inp_radio[i].checked = false;
            back_input[i].style.backgroundColor = "#DDDDDD";
        }
        
    }
}