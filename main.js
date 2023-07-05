// Challenge 1: Student Grade Generator

function studentGradeGenerator() {
    const marks = Number(prompt("Enter student marks: "));
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
  
  // Challenge 2: Speed Detector
  
  function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPoints = Math.floor((speed - speedLimit) / 5);
    if (speed <= speedLimit) {
      return "Ok";
    } else if (demeritPoints <= 12) {
      return `Points: ${demeritPoints}`;
    } else {
      return "License suspended";
    }
  }
  
  // Challenge 3: Net Salary Calculator
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

 function netSalaryCalculator(basicSalary, benefits) {
    const KRATax = calculateKRATax * basicSalary;
    const NHIFDeductions = calculateNHIFDeductions * basicSalary;
    const NSSFDeductions = calculateNSSFDeductions * basicSalary;
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - KRATax - NHIFDeductions - NSSFDeductions;
    return {
      grossSalary,
      KRATax,
      NHIFDeductions,
      NSSFDeductions,
      netSalary,
    };
  }
  
  // Driver code
  
  const grade = studentGradeGenerator();
  console.log(`Your grade is ${grade}`);
  
  const speed = Number(prompt("Enter the speed of the car: "));
  const demeritPoints = speedDetector(speed);
  console.log(demeritPoints);
  
  const netSalary = netSalaryCalculator(10000, 5000);
  console.log(netSalary);
