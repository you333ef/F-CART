let email = document.getElementById('email');
let username = document.getElementById('username');
let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');
let submit = document.getElementById('submit');

let PAPA_ARRAY = JSON.parse(localStorage.getItem('INFODATA')) || [];

// فقط إعادة التوجيه إذا كان المستخدم مسجل
if (PAPA_ARRAY.length > 0) {
   window.location='./index.html';
}

submit.onclick = function(event) {
    event.preventDefault();

    let OBJ = {
        email: email.value,
        username: username.value,
        password: password.value,
        confirm_password: confirm_password.value,
    };

    if (!email.value || !username.value || !password.value || !confirm_password.value) {
        return alert('Please fill all fields');
    }

    if (password.value !== confirm_password.value) {
        return alert('Make sure the confirm password matches.');
    }

    if (OBJ.password.length < 5) {
        return alert('لا يُسمح بكتابة كلمة سر أقل من 5');
    }

    PAPA_ARRAY.push(OBJ);
    LOCALDATA();
    window.location.href = './MAIN.html';
};

function LOCALDATA() {
    window.localStorage.setItem("INFODATA", JSON.stringify(PAPA_ARRAY));
}
