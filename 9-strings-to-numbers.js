// Part 9 - Strings to Numbers

function addNumbers() {
    //var firstNumber = parseInt(document.getElementById("txtFirstNumber").value);
    //var secondNumber = parseInt(document.getElementById("txtSecondNumber").value);

    
    var firstNumber = document.getElementById("txtFirstNumber").value;
    var secondNumber = document.getElementById("txtSecondNumber").value;

    // First Number
    if (firstNumber == "") {
        alert("First Number is Required");
        return;
    }

    if (isNaN(firstNumber)) {
        alert("Please enter a valid number in First Number text box");
        return;
    }
    var firstNumber = parseFloat(firstNumber);

    // Second Number
    if (secondNumber == "") {
        alert("Second Number is Required");
        return;
    }

    if (isNaN(secondNumber)) {
        alert("Please enter a valid number in Second Number text box");
        return;
    }
    var secondNumber = parseFloat(secondNumber);

    document.getElementById("txtResult").value = firstNumber + secondNumber;
}