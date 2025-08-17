function handleCalculate() {
  const dobInput = document.getElementById("dob");
  const dobValue = dobInput.value;
  const errorDiv = document.getElementById("error");
  const resultDiv = document.getElementById("result");

  errorDiv.textContent = "";
  resultDiv.textContent = "";

  if (!dobValue) {
    errorDiv.textContent = "Please select a date.";
    return;
  }

  const dob = new Date(dobValue);
  const today = new Date();

  if (dob > today) {
    errorDiv.textContent = "Date of birth cannot be in the future!";
    return;
  }

  const age = calculateAge(dob);
  displayResult(age);
}

function calculateAge(dob) {
  const today = new Date();
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function displayResult(ageObj) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `You are ${ageObj.years} years, ${ageObj.months} months, and ${ageObj.days} days old.`;
}

function handleReset() {
  document.getElementById("dob").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("error").textContent = "";
}
