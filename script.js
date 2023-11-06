var sumCounts = new Array(13);
for (var i = 0; i < sumCounts.length; i++) {
sumCounts[i] = 0;
}
var tossCount = 0;

function makeRandomLine() {
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    let sum = a + b;
    var diceSum = document.getElementById("diceSum");
    diceSum.innerHTML = "Summa: " + a + " + " + b + " = " + sum;

    sumCounts[sum]++;
    updateSumDisplay();
    tossCount++;
    var tossCountElement = document.getElementById("tossCount");
    tossCountElement.innerHTML = "Antal kast: " + tossCount;
}

function updateSumDisplay() {
    var sumDisplay = document.getElementById("sumDisplay");
    var displayText = "";

    for (var i = 2; i <= 12; i++) {
        if (i < 10) {
            displayText += "&nbsp ";
        }
        displayText += i + ": ";
        for (var j = 0; j < sumCounts[i]; j++) {
            displayText += "<span class='green-bar'>|</span>";
        }
        displayText += "<br>";
    }

    sumDisplay.innerHTML = displayText;
}

window.onload = function() {
    updateSumDisplay();
};
