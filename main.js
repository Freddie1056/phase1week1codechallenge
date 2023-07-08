// Student Grade
const gradeButton = document.getElementById("grade-button");
const gradeResult = document.getElementById("grade-result");

gradeButton.addEventListener("click", () => {
  const marksInput = document.getElementById("marks-input");
  const marks = Number(marksInput.value);
  
  if (!isNaN(marks)) {
    const grade = studentGradeGenerator(marks);
    gradeResult.textContent = `Grade: ${grade}`;
  } else {
    gradeResult.textContent = "Please enter a valid marks value";
  }
});

function studentGradeGenerator(marks) {
  if (marks > 79) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 59) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

// Speed Detector
const speedButton = document.getElementById("speed-button");
const speedResult = document.getElementById("speed-result");

speedButton.addEventListener("click", () => {
  const speedInput = document.getElementById("speed-input");
  const speed = Number(speedInput.value);
  
  if (!isNaN(speed)) {
    const demeritPoints = speedDetector(speed);
    speedResult.textContent = `Demerit Points: ${demeritPoints}`;
  } else {
    speedResult.textContent = "Please enter a valid speed value";
  }
});

function speedDetector(speed) {
  const speedLimit = 70;
  const demeritPoints = Math.floor((speed - speedLimit) / 5);
  
  if (speed <= speedLimit) {
    return "Ok";
  } else if (demeritPoints <= 12) {
    return demeritPoints;
  } else {
    return "License Suspended";
  }
}

// Net Salary Calculator
const salaryButton = document.getElementById("salary-button");
const salaryResult = document.getElementById("salary-result");

salaryButton.addEventListener("click", () => {
  const salaryInput = document.getElementById("salary-input");
  const benefitsInput = document.getElementById("benefits-input");
  const basicSalary = Number(salaryInput.value);
  const benefits = Number(benefitsInput.value);
  
  if (!isNaN(basicSalary) && !isNaN(benefits)) {
    const netSalary = netSalaryCalculator(basicSalary, benefits);
    salaryResult.textContent = `Net Salary: $${netSalary.toFixed(2)}`;
  } else {
    salaryResult.textContent = "Please enter valid values for basic salary and benefits";
  }
});

function netSalaryCalculator(basicSalary, benefits) {
  const KRATax = calculateKRATax(basicSalary);
  const NHIFDeductions = calculateNHIFDeductions(basicSalary);
  const NSSFDeductions = calculateNSSFDeductions(basicSalary);
  const grossSalary = basicSalary + benefits;
  const netSalary = grossSalary - KRATax - NHIFDeductions - NSSFDeductions;
  return netSalary;
}

function calculateKRATax(basicSalary) {
  const taxableIncome = basicSalary - 16000;
  const taxRate = 0.16;
  const KRATax = taxableIncome * taxRate;
  return KRATax;
}

function calculateNHIFDeductions(basicSalary) {
  const NHIFDeductions = basicSalary * 0.05;
  return NHIFDeductions;
}

function calculateNSSFDeductions(basicSalary) {
  const NSSFDeductions = basicSalary * 0.08;
  return NSSFDeductions;
}



