function calculate() {
 
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);
  const num4 = parseFloat(document.getElementById("num4").value);
  const num5 = parseFloat(document.getElementById("num5").value);

  
  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
    document.getElementById("result").innerText = "Please enter all five numbers.";
    return;
  }

  
  let result = (num1 * num2) / num3 + num4 - num5;

  
  document.getElementById("result").innerText = "Result (MDAS): " + result.toFixed(2);
}


function changeFontSize(step) {
  const text = document.getElementById("text");
  const currentSize = parseFloat(window.getComputedStyle(text, null).getPropertyValue("font-size"));
  text.style.fontSize = (currentSize + step) + "px";
}