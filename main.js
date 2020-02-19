const submit_reg_button = document.getElementById("reg-button").addEventListener("click", registerMe);
const close_alert_button = document.getElementById("close-alert").addEventListener("click", closeAlert);



function registerMe(e) {

    // For more info about preventDefault() visit W3Schools.com.
    e.preventDefault();

    var user = document.getElementById("username").value;
    var mail = document.getElementById("email-address").value;
    var pword = document.getElementById("password").value;
    var confpword = document.getElementById("confirm-p").value;
    var cont = document.querySelector(".content");
    var prog = document.querySelector(".progress-bar");
    var aler = document.querySelector(".alert");

    var pass = pword;
    var symbols = "!@#$%{}':.<>?^&=+_)(";



    var counter = 0




    if (user.length > 0 && mail.length > 0 && pword.length > 0 && confpword == pword && counter > 1) {
        cont.innerHTML = "<h1> Thank you </h1>";
        if (aler.style = "visibility:visible") {
            aler.style.visibility = "hidden";

        }
    } else {
        if (user.length <= 0) {

            if (aler.style = "visibility:hidden") {
                aler.style.visibility = "visible";

            }
            document.getElementById("warning-messegge").innerHTML = "Enter username please";
            prog.style.width = "25%";

        } else if (mail.length < 1) {

            if (aler.style = "visibility:hidden") {
                aler.style.visibility = "visible";

            }
            document.getElementById("warning-messegge").innerHTML = "Enter email please";

            prog.style.width = "45%";


        } else if (pword.length < 1) {
            document.getElementById("warning-messegge").innerHTML = "Enter password please !";
            prog.style.width = "45%";
        } else if (confpword != pword) {
            if (aler.style = "visibility:hidden") {
                aler.style.visibility = "visible";
                document.getElementById("warning-messegge").innerHTML = "Passwords do not match";

            }
            prog.style.width = "60%";

        } else if (counter < 1) {
            while (counter < 1) {


                for (var i = 0; i < pass.length; i++) {
                    for (var j = 0; j < symbols.length; j++) {

                        if (pass[i] == symbols[j]) {
                            counter += 1
                            console.log("Its a match");
                           
                        }

                    }

                    if (counter == 0) {
                        console.log("Check the alert messegge");
                        if (aler.style = "visibility:hidden") {
                            aler.style.visibility = "visible";
                            document.getElementById("warning-messegge").innerHTML = "Use at least one symbol, make sure the symbol is first";

                        }
                        break
                    }
                }
                break
            }
            prog.style.width = "75%";
        }
        if (counter >= 1) {
            cont.innerHTML = " <h1 style='padding-bottom:43%;'> You are successfully signed in ! </h1> ";
            if (aler.style = "visibility:visible") {
                aler.style.visibility = "hidden";

            }
            prog.style.width = "100%";
        }
    }
}


function closeAlert(e) {
    e.preventDefault();

    var aler = document.querySelector(".alert");

    if (aler.style = "visibility:visible") {
        aler.style.visibility = "hidden";
    }
}
