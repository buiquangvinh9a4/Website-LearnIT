var btn_user = document.getElementById("js-user");
        var user_hidden = document.getElementById("js-user-hidden");
        var user_name = document.getElementById("js-user-name");
        btn_user.addEventListener("click", function() {
            if (user_hidden.style.display == "none") {
                user_hidden.style.display = "block";
                btn_user.style.backgroundColor = "#fff";
                user_name.style.color = "rgb(0, 90, 156)";
            } else {
                user_hidden.style.display = "none";
                btn_user.style.backgroundColor = "";
                user_name.style.color = "#fff";
            }
        });