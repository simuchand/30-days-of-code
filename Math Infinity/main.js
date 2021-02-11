const passBlock1 = document.getElementById('field1');
const passBlock2 = document.getElementById('field2');
const passBlock3 = document.getElementById('field3');
const passBlock4 = document.getElementById('field4');
const passBlock5 = document.getElementById('field5');
const passDiv = document.getElementById('pass-val-field');
const passDiv1 = document.getElementById('pass-val-field1');
let password;
let confirmPassword;
let val = false;

function passwordValidation(event) {
    password = event.value.toString().trim();
    let stage1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-])[a-zA-Z0-9!@#$%^&*]{8,10}$/
    let stage2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-])[a-zA-Z0-9!@#$%^&*]{11,15}$/
    let stage3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-])[a-zA-Z0-9!@#$%^&*]{15,}$/
    if (password.length > 0) {
        passDiv.style.visibility = "visible";
        if (password.length >= 8) {
            passBlock1.style.background = "#868585";
            passBlock2.style.background = "#db3236";
            passBlock3.style.background = "#db3236";
            passBlock4.style.background = "#db3236";
            if (password.match(stage1)) {
                console.log('2G');
                passBlock1.style.background = "#3cba54";
                passBlock2.style.background = "#3cba54";
                passBlock3.style.background = "#f4c20d";
                passBlock4.style.background = "#f4c20d";
            }
            else if (password.match(stage2)) {
                console.log('3G');
                passBlock1.style.background = "#3cba54";
                passBlock2.style.background = "#3cba54";
                passBlock3.style.background = "#3cba54";
                passBlock4.style.background = "#f4c20d";
            }
            else if (password.match(stage3)) {
                console.log('4G');
                passBlock1.style.background = "#3cba54";
                passBlock2.style.background = "#3cba54";
                passBlock3.style.background = "#3cba54";
                passBlock4.style.background = "#3cba54";
            }
        }
        else {
            passBlock1.style.background = "#db3236";
            passBlock2.style.background = "#db3236";
            passBlock3.style.background = "#db3236";
            passBlock4.style.background = "#db3236";
        }
    } else {
        passDiv.style.visibility = "hidden";    
    }
}

function confirmPasswordValidation(event) {
    confirmPassword = event.value.toString().trim();
    if (confirmPassword.length > 0) {
        passDiv1.style.visibility = "visible";
        if (confirmPassword === password) {
            passBlock5.style.background = "#3cba54"
            val = true;
        }
        else {
            passBlock5.style.background = "#db3236"
            val = false;
        }
    }
    else
        passDiv1.style.visibility = "hidden";
}

function loginVal() {
    if (val) {
        alert('Sign Up Successful');
        location.reload();
    }
    else
        alert('Sign Up Failed');
}

