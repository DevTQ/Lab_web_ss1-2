document.addEventListener("DOMContentLoaded", function() {
    
    var h1Element = document.querySelector("body :first-child");
   
    h1Element.style.textAlign = "center";
    h1Element.style.fontSize = "14px";
    h1Element.style.color = "blue";
    document.body.appendChild(h1Element);

    var pElements = document.getElementsByTagName("p");
    for (var i = 0; i < pElements.length; i++) {
      pElements[i].style.color = "blue";
      pElements[i].style.fontSize = "6px";
    }

    var h1Color = document.getElementById("h1Element");
    h1Element.addEventListener("mouseover", function() {
      h1Color.style.color = "yellow";
    });

    h1Element.addEventListener("mouseout", function() {
      h1Color.style.color = "blue";
    });
  });
function checkEmail() {
    var emailInput = document.querySelector('input[name="address"]');
    var emailValue = emailInput.value.trim();

    if (emailValue === '') {
        alert('Không được để trống địa chỉ email!');
        return false;
    } else if (!emailValue.includes('@')) {
        alert('Địa chỉ email phải có ký tự @!');
        return false;
    }else {
        if(emailValue) {
            alert('Register succesfully!');
            return true;
        }
    }
}
