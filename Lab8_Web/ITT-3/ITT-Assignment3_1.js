function checkSubmit() {
    var name = document.getElementById('ten').value;
    var maHocVien = document.getElementById('mahocvien').value;
    var lop = document.getElementById('lop').value;
    var ngaySinh = document.getElementById('ngaysinh').value;
    var tuoiField = document.getElementById('tuoi');
    
    // Reset background color for all fields
    var allFields = document.querySelectorAll('.input-field');
    allFields.forEach(function(field) {
        field.style.backgroundColor = '';
    });

    // Rule a: Tất cả các trường không được để trống
    if (name == '' || maHocVien == '' || lop == '' || ngaySinh == '') {
        alert('Tất cả các trường không được để trống!');
        highlightFields(allFields);
        return false;
    }

    // Rule b: Tên phải có ít nhất 2 từ, và không được có số trong tên
    if (!(/^[a-zA-Z ]+$/.test(name) && name.split(' ').length <= 2 && !/\d/.test(name))) {
        alert('Tên phải có ít nhất 2 từ, và không được có số trong tên!');
        highlightField('ten');
        return false;
    }

    // Rule c: Mã học viên phải đúng định dạng của HN-Aptech
    if (!/^[a-zA-Z]{2}-Aptech\d{2,}$/.test(maHocVien)) {
        alert('Mã học viên phải đúng định dạng của HN-Aptech!');
        highlightField('mahocvien');
        return false;
    }

    // Rule d: Lớp phải đúng định dạng tên lớp
    if (!/^[a-zA-Z0-9]+$/.test(lop)) {
        alert('Lớp phải đúng định dạng tên lớp!');
        highlightField('lop');
        return false;
    }

    // Rule e: Ngày sinh không được lớn hơn ngày hiện tại
    let ngayThangHienTai = new Date();
    let birthdate = new Date(ngaySinh);

    if (birthdate > ngayThangHienTai) {
        alert('Ngày sinh không được lớn hơn ngày hiện tại!');
        highlightField('ngaysinh');
        return false;
    }

    // Rule f: Trường tuổi không được <0
    var tuoi = calculateAge(birthdate);
    tuoiField.value = tuoi;

    if (tuoi < 0) {
        alert('Tuổi phải lớn hơn hoặc bằng 0!');
        highlightField('tuoi');
        return false;
    }

    return true;
}

function highlightField(fieldId) {
    var field = document.getElementById(fieldId);
    if (field) {
        field.style.backgroundColor = 'pink';
    }
}

function highlightFields(fields) {
    fields.forEach(function(field) {
        field.style.backgroundColor = 'pink';
    });
}

function calculateAge(birthdate) {
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    return age;
}

// Thêm sự kiện cho việc di chuột qua dòng chữ
document.querySelectorAll('.form-text').forEach(function(element) {
    element.addEventListener('mouseover', function() {
        this.style.color = 'yellow';
    });

    element.addEventListener('mouseout', function() {
        this.style.color = ''; // Đặt lại màu chữ khi di chuột ra khỏi dòng chữ
    });
});
