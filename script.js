const btn = document.getElementById("btn");

btn.addEventListener("click", function handleClick() {
  const w = parseFloat(document.getElementById("weight").value);
  const h = parseFloat(document.getElementById("height").value);
  const result = w / ((h * h) / 10000);
  const BMI = document.getElementById("BMI");
  BMI.value = result.toFixed(2);
});
