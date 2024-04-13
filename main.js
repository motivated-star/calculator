
 validateAge("ageGroup", "error-msg", "check", "exclamation");
 validateInput("grossIncome", "error-msg1", "check1", "exclamation1");
 validateInput("extraIncome", "error-msg2", "check2", "exclamation2");
 validateInput("deductions", "error-msg3", "check3", "exclamation3");

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
        var g = parseFloat(document.getElementById('grossIncome').value);
        var e = parseFloat(document.getElementById('extraIncome').value);
        var a = document.getElementById('ageGroup').value;
        var d = parseFloat(document.getElementById('deductions').value);
        var o = g + e - d;
        let tax = 0;
        if (o <= 800000) {
            document.getElementById('res').innerText = o;
            document.getElementById('resultPopup').classList.add('active');
        } else {
            switch (a) {
                case 'less':
                    tax = 0.3;
                    break;
                case 'between':
                    tax = 0.4;
                    break;
                case 'greater':
                    tax = 0.1;
                    break;
                default:
                    tax = 0.0;
            }
            let t = o - 800000;
            let te = t * tax;
            document.getElementById('res').innerText = te;
            document.getElementById('resultPopup').style.display = 'block';
        }

    });
    document.getElementById("close").addEventListener("click", function closePopup() {
        // document.getElementById('resultPopup').classList.remove('active');
        var popup = document.getElementById('resultPopup');
        popup.style.display = 'none';
    });

});


function validateInput(inputId, errorMsgId, checkIconId, exclamationIconId) {
    var inputElement = document.getElementById(inputId);
    var errorMsgElement = document.getElementById(errorMsgId);
    var checkIconElement = document.getElementById(checkIconId);
    var exclamationIconElement = document.getElementById(exclamationIconId);

    inputElement.addEventListener("input", function (e) {
        e.preventDefault();

        var inputValue = this.value.trim();

        if (inputValue === "") {
            errorMsgElement.textContent = "This field is required";
            errorMsgElement.classList.add("error");
            exclamationIconElement.style.display = "inline-block";
            checkIconElement.style.display = "none";
            return false;
        } else if (inputId != ageGroup && isNaN(inputValue)) {
            errorMsgElement.textContent = "Only numbers are allowed";
            errorMsgElement.classList.add("error");
            exclamationIconElement.style.display = "inline-block";
            checkIconElement.style.display = "none";
            return false;
        } else {
            errorMsgElement.textContent = "";
            errorMsgElement.classList.remove("error");
            exclamationIconElement.style.display = "none";
            checkIconElement.style.display = "inline-block";
            return true;
        }
    });
}
function validateAge(inputId, errorMsgId, checkIconId, exclamationIconId) {
    var inputElement = document.getElementById(inputId);
    var errorMsgElement = document.getElementById(errorMsgId);
    var checkIconElement = document.getElementById(checkIconId);
    var exclamationIconElement = document.getElementById(exclamationIconId);

    inputElement.addEventListener("input", function (e) {
        e.preventDefault();

        var inputValue = this.value.trim();

        if (inputValue === "") {
            errorMsgElement.textContent = "This field is required";
            errorMsgElement.classList.add("error");
            exclamationIconElement.style.display = "inline-block";
            checkIconElement.style.display = "none";
            return false;
        } else {
            errorMsgElement.textContent = "";
            errorMsgElement.classList.remove("error");
            exclamationIconElement.style.display = "none";
            checkIconElement.style.display = "inline-block";
            return true;
        }
    });

}