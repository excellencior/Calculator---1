function screenText(value) {
    document.getElementById("display-text").innerText = "" + value;
}

var pressValue = document.getElementsByTagName("button");
var inputValue = "";

for (var i = 0; i < pressValue.length; i++) {
    document.getElementById(pressValue[i].id).addEventListener('click', function (event) {
        var numKey = event.target.innerText;
        
        if (numKey >= 0 && numKey <= 9) {
            // console.log(numKey);
            inputValue += numKey;
            screenText(inputValue);
        }
        else if (numKey == "+") {
            inputValue += "+";
            screenText(inputValue);
        }
        else if (numKey == "-") {
            inputValue += "-";
            screenText(inputValue);
        }
        else if (numKey == "x") {
            inputValue += "*";
            screenText(inputValue);
        }
        else if (numKey == "/") {
            inputValue += "/";
            screenText(inputValue);
        }
        else if (numKey == "=") {
            try {
                inputValue = eval(inputValue);
                screenText(inputValue);
                inputValue = "";
            }
            catch (err) {
                screenText("Error!");
                inputValue = "";
            }
            
        }

        else if (numKey == "Clear") {
            // console.log("Clear pressed");
            screenText("00");
        }
    })

}
