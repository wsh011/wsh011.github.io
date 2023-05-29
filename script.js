function calculate() {
  var twdAmount = document.getElementById("twdAmount").value;
  var exchangeRates = window.exchangeRates;

  if (isNaN(twdAmount) || twdAmount <= 0) {
    alert("請輸入有效的台幣金額。");
    reset();
    return;
  }

  var usdAmount = twdAmount * exchangeRates.USD;
  var eurAmount = twdAmount * exchangeRates.EUR;
  var jpyAmount = twdAmount * exchangeRates.JPY;
  var krwAmount = twdAmount * exchangeRates.KRW;
  var audAmount = twdAmount * exchangeRates.AUD;

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "美金（USD）：" + usdAmount.toFixed(2) + "<br>" +
                            "歐元（EUR）：" + eurAmount.toFixed(2) + "<br>" +
                            "日圓（JPY）：" + jpyAmount.toFixed(2) + "<br>" +
                            "韓元（KRW）：" + krwAmount.toFixed(2) + "<br>" +
                            "澳幣（AUD）：" + audAmount.toFixed(2);
}

function reset() {
  document.getElementById("twdAmount").value = "";
  document.getElementById("result").innerHTML = "";
}

