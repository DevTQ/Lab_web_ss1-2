document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('button');
    var input = document.querySelector('input');
    var contacUs = document.querySelector('a');

    button.addEventListener('click', function () {
        var inputValue = input.value;
        var cleanedString = inputValue.replace(/\s+/g, '');
        alert(cleanedString);
    });

    button.addEventListener('mouseover', function() {
        input.style.background = 'red';
    });

    button.addEventListener('mouseout', function() {
        input.style.background = '';
    });

    contacUs.addEventListener('mouseover', function() {
        contacUs.style.color = 'yellow';
    });

    contacUs.addEventListene('mouseout', function() {
        contacUs.style.color = '';
    });

    contacUs.addEventListener('mousedown', function() {
        contacUs.style.color = 'violet';
    });

    contacUs.addEventListener('mouseup', function() {
        contacUs.style.color = 'black';
    });
});
