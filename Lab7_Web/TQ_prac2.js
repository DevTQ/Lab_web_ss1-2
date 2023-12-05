function check(event) {
    var count = 0;
    for (i = 0; i < f.magazine.length; i++) {
      if (f.magazine[i].checked == true) count++;
    }if (f.fname.value == "") {
      alert("The first name field cannot be empty!");
      return false;
    } else if (f.lname.value == "") {
      alert("The last name field cannot be empty!");
      return false;
    } else if (f.address.value == "") {
      alert("The address field cannot be empty!");
      return false;
    } else if (
      count < 1 ||
      f.duration.value == "" || f.payment.value == "") {
      alert("User must choose at least a magazine, duration, and payment option!");
      return false;
    } else {
      var firstName = document.getElementById("fname").value;
      var lastName = document.getElementById("lname").value;
      var address = document.getElementById("address").value;
      var magazines = document.querySelectorAll('input[name="magazine"]:checked');
      var duration = document.querySelector('input[name="duration"]:checked');
      var payment = document.querySelector('input[name="payment"]:checked');
      var gender = document.querySelector('input[name="gender"]:checked');
      var confirmmsg = "Do you want to order ";

      magazines.forEach(function (magazine) {
        confirmmsg += magazine.value + " ";
    });
      confirmmsg +=
        "magazine(s) for " +
        duration.value +
        " and to pay with " +
        payment.value +
        "?";
      if (confirm(confirmmsg)) {
        var finalmsg =
          "Thank you very much for your order, we will supply as soon as possible the magazines for you to the address:\n\t" +
          (gender && gender.value === "male" ? "Mr. " : "Mrs. ") +
          fname.value +
          " " +
          lname.value +
          "\n\t" +
          address;

        alert(finalmsg);
      } else {
        event.preventDefault();
        document.getElementById("lname").focus();
      }
    }
  }