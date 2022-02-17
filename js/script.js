function costInputAmount(costInputId) {
  let costsInput = document.getElementById(costInputId);
  const costsText = costsInput.value;
  const costs = parseFloat(costsText);
  costsInput.value = '';
  return costs;

}
function incomeInput(incomeInputId) {
  let incomeInput = document.getElementById(incomeInputId);
  const incomeInputText = incomeInput.value;
  const income = parseFloat(incomeInputText);
  return income;
}
// handle calculate btn event handler
document.getElementById('calculate-btn').addEventListener('click', function () {
  // get income amount
  const income = incomeInput('income');
  // error handling
  if (isNaN(income) || income <= 0) {
    alert('Please enter your income as a number greater than 0');
  };

  //get food cost
  const costForFood = costInputAmount('food');
  // error handling
  if (isNaN(costForFood) || costForFood < 0) {
    alert('Please enter a positive Number for food cost');
  };
  // console.log(costForFood);

  // get rent cost
  const costForRent = costInputAmount('rent');
  // error handling
  if (isNaN(costForRent) || costForRent < 0) {
    alert('Please enter a positive Number for rent cost');
  };
  // console.log(costForRent);

  // get cloth cost 
  const costForCloth = costInputAmount('cloth');
  // console.log(costForCloth);
  // error handling
  if (isNaN(costForCloth) || costForCloth < 0) {
    alert('Please enter a positive Number for cloth cost');
  };

  // calculate total cost 
  const totalCost = costForFood + costForRent + costForCloth;

  // error handling ---
  // if (totalCost > income) {
  //   alert('Insuficient Income Balance for Expense');
  // };
  // console.log(totalCost);

  // get expenses field
  let totalExpenses = document.getElementById('total-expenses');
  // aktu vinno vabe error handle korar try koreci
  if (totalCost > income) {
    alert('Insufficient income balance for expense')
    totalExpenses.innerText = totalCost
    const balance = document.getElementById('balance');
    balance.innerText = 'Income less than expense.';
  }
  else {
    totalExpenses.innerText = totalCost;
    // console.log(totalExpenses);
    // get balance field
    const balance = document.getElementById('balance');
    // set remaing balance after expenses
    const remaining = income - totalCost;
    // console.log(balance)
    balance.innerText = remaining;
  }
})

// handle save btn event handler
document.getElementById('save-btn').addEventListener('click', function () {
  const income = incomeInput('income')
  // console.log(income);

  // get remaining balance after expense and conver to floatin number
  const remainingAfterExpenseField = document.getElementById('balance');
  const remainingAfterExpense = parseFloat(remainingAfterExpenseField.innerText);

  // get saving input and value and convet to floating number
  const saveInput = document.getElementById('save-input');
  const savingsText = saveInput.value;
  const savingsPercent = parseFloat(savingsText);
  // error handling
  if (isNaN(savingsPercent) || savingsPercent < 1) {
    alert('Please Enter your savings input as a number and greater than 0');
  };
  // console.log(savingsPercent);

  // get saving amount
  const savingAmount = document.getElementById('saving-amount');
  // savings calculation 
  const savingsCalculation = (income * savingsPercent) / 100;
  if (savingsCalculation > remainingAfterExpense) {
    alert('Insuficient balance after expense. ');
  };
  // console.log(savingsCalculation);

  //set savings amount total
  savingAmount.innerText = savingsCalculation;
  // console.log(savingAmount);

  // remaining balance calculation 
  const remainingAfterSavings = remainingAfterExpense - savingsCalculation;

  // get remaining balance field
  const remainingBalance = document.getElementById('remaining-balance');
  // console.log(remainingBalance);

  // set remaining balance after savings
  remainingBalance.innerText = remainingAfterSavings;

  // clear saveing input and balance field 
  saveInput.value = '';
})