document.addEventListener("DOMContentLoaded", function() {
    var rows = document.querySelectorAll("table tr");

        for (var i = 1; i < rows.length; i++) {
            var cells = rows[i].querySelectorAll("td");

            cells[0].style.backgroundColor = "red";
            cells[6].style.backgroundColor = "blue";
        }

    var cells = document.querySelectorAll("td, th");

    cells.forEach(function(cell) {
        var originalFontSize = window.getComputedStyle(cell).fontSize;

        cell.addEventListener("mouseover", function() {
            this.style.backgroundColor = "HotPink";
            this.style.fontSize = (parseInt(originalFontSize) + 5) + 'px';
        });

        cell.addEventListener("mouseout", function() {
            this.style.backgroundColor = "";
            this.style.fontSize = originalFontSize;
        });
    }); 
    
    var selectedColorDiv = document.querySelector(".select-color");
    var colorButtons = document.querySelectorAll(".color-button button");
    colorButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var color = window.getComputedStyle(button).backgroundColor;
            selectedColorDiv.style.backgroundColor = color;
        });
    });

    var clickCells = document.querySelectorAll('table td, table th');
    clickCells.forEach(function(cell) {
        cell.addEventListener('click', function() {
            var colorDiv = window.getComputedStyle(selectedColorDiv).backgroundColor;
            cell.style.backgroundColor = colorDiv;
        });
    });
});
