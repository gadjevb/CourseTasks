const validate = () => {
    let number = document.decimalValidatorForm.inputField.value;
    let numberRegEx = /^[-+]?[0-9]{1,10}([.,][0-9]{1,5})?$/;
    let test = numberRegEx.test(number);
    if (test) {
        alert("The number is OK!");
    }
    else {
        alert("The number is not OK!");
    }
}