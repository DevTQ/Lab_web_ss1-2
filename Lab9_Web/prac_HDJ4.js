function checkReset() {
    document.getElementById('myForm').reset();
}

function checkSubmit() {
    var fullName = document.getElementById('fullname').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var question = document.getElementById('question');
    var answer = document.getElementById('answer').value;
    var infor = document.getElementById('infor').value;

    if(fullName == '') {
        alert('Full name của bạn phải được nhập vào!');
        return false;
    }

    if(address == '') {
        alert('Address của bạn phải được nhập vào!');
        return false;
    }

    if(email == '') {
        alert('Email của bạn phải được nhập vào!');
        return false;
    }

    if(question.selectedIndex === 0) {
        alert('Bạn chưa lựa chọn Question!');
        return false;
    }

    if(answer == '') {
        alert('Answer của bạn phải được nhập vào!');
        return false;
    }

    if(infor == '') {
        alert('Infor của bạn phải được nhập vào!');
        return false;
    }

    var regexFullName = /^[a-zA-Z]+$/;
    if(!regexFullName.test(fullName)) {
        alert('Full name không đúng định dạng!');
        alert('full name chỉ chứa các kí tự từ a-z Hoặc A-Z và dấu cách.');
        return false;
    }

    var regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(!regexEmail.test(email)) {
        alert('Email không đúng định dạng!');
        return false;
    }

    alert('You have registered success.');
}

function checkSend() {
    var checkbox = document.getElementById('sendinfor');
    var button = document.getElementById('submitform');
    checkbox.addEventListener('change', function() {
        button.disabled = !checkbox.checked;
    });
}

function txt_input_onfocus(txt) {
    txt.style.backgroundColor = "yellow";
}

function txt_input_onblur(txt) {
    txt.style.backgroundColor = "white";
}

