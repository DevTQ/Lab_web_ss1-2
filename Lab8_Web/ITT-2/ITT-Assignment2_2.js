function checkMouseOver() {
    var mouseH2 = document.querySelector('h2');
    mouseH2.addEventListener('mouseover', function() {
        mouseH2.style.color = 'blue';
        mouseH2.style.textDecoration = 'none';
    });

    mouseH2.addEventListener('mouseout', function() {
        mouseH2.style.color = '';
        mouseH2.style.textDecoration = 'underline';
    });
}


function checkSubmit() {
    var Name = document.getElementById('name').value;
    var Password = document.getElementById('password').value;
    var Confirm_Password = document.getElementById('confirm-password').value;
    var TelNumber = document.getElementById('telnumber').value;
    var Email = document.getElementById('email').value;

    if(Name == '' || Password == '' || Confirm_Password == '' || TelNumber == '' || Email == '') {
        alert('Hãy nhập đủ các trường Name, Password, Confirm_Password, TelNumber, Email');
        return false;
    }

    var RegexTelNumber = /^0[0-9][0-9]{8}$/;
    if(!RegexTelNumber.test(TelNumber)) {
        alert('Số điện thoại không đúng định dạng!');
        return false;
    }

    var regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(regexEmail.test(Email) == false) {
        alert('Email không đúng định dạng!');
        return false;
    }

    if(Password.value != Confirm_Password.value) {
        alert('Confirm_Password không chính xác!');
        return false;
    }
    showGroup();
}

function checkDisable() {
    var Name = document.getElementById('name').value;
    if(Name.trim() !== '') {    
        document.getElementById('password').disabled = false;
        document.getElementById('address').disabled = false;
        document.getElementById('company').disabled = false;
        document.getElementById('email').disabled = false;
        document.getElementById('confirm-password').disabled = false;
        document.getElementById('telnumber').disabled = false;
        document.getElementById('age').disabled = false;
    }
}

function showGroup() {
    var selected = document.getElementById('age').selectedIndex;
    switch (selected) {
        case 0:
            alert("You are in Group 1");
            break
        case 1:
            alert("You are in Group 2");
            break
        case 2:
            alert("You are in Group 3");
            break
        case 3:
            alert("You are in Group 4");
            break
        case 4:
            alert("You are in Group 5");
            break
        case 5:
            alert("You are in Group 6");
            break
    }
}