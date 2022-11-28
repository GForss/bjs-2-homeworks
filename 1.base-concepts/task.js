"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let  discriminant = b**2-4*a*c;

  if (discriminant < 0) {
  } else if (discriminant === 0) {
    let oneRoot = -b/(2*a);
    arr.push(oneRoot);
  } else if (discriminant > 0) {
    let twoRoot = (-b + Math.sqrt(discriminant) )/(2*a);
    let threeRoot = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(twoRoot, threeRoot);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let totalAmount;
  let loanBody;
  let monthlyPayment;

  if (isNaN(percent) ||  isNaN(contribution) ||  isNaN(amount)) {
    return false
  }

  percent = (percent / 100) / 12;
  loanBody = amount - contribution;
  monthlyPayment = loanBody * (percent + (percent / (((1 + percent)** countMonths)- 1)));
  totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));

  return totalAmount;
}