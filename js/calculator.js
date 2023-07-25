let amount = document.getElementById("fullAmount");

        function calculateTip() {
            let cost = fullAmount.value; 
            let tip = fullAmount.value * .20;
            let total = +tip + +fullAmount.value;
            console.log ("tip:" + tip + " " + "total:" + total)
        }