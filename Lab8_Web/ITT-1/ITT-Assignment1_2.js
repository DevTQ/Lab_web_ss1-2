function calculateResult() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)) {
        alert("Giá trị nhập sai!");
    }

    var operator = document.querySelector('input[name="operator"]:checked');

    if (operator) {
        operator = operator.value;
        
        switch (operator) {
            case 'add':
                document.getElementById("result").value = num1 + num2;
                break;
            case 'sub':
                document.getElementById("result").value = num1 - num2;
                break;
            case 'mul':
                document.getElementById("result").value = num1 * num2;
                break;
            case 'div':
                if (num2 !== 0) {
                    document.getElementById("result").value = num1 / num2;
                } else {
                    alert("Không thể chia cho 0!");
                }
                break;
        }
    } else {
        alert("Please select an operator!");
    }
    return false;
}