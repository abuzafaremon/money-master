function costInputAmount(costInputId) {
  let costsInput = document.getElementById(costInputId);
  const costsText = costsInput.value;
  const costs = parseFloat(costsText);
  costsInput.value = '';
  return costs;
}
// handle calculate btn event handler
document.getElementById('calculate-btn').addEventListener('click', function () {
  // get income amount
  const income = costInputAmount('income')
  // console.log(income);

  //get food cost
  const costForFood = costInputAmount('food');
  // console.log(costForFood);

  // get rent cost
  const costForRent = costInputAmount('rent');
  // console.log(costForRent);

  // get cloth cost 
  const costForCloth = costInputAmount('cloth');
  // console.log(costForCloth);

  // calculate total cost 
  const totalCost = costForFood + costForRent + costForCloth;
  // console.log(totalCost);

  // get expenses field
  let totalExpenses = document.getElementById('total-expenses');
  // set total expenses
  totalExpenses.innerText = totalCost;
  // console.log(totalExpenses);

  // get balance field
  const balance = document.getElementById('balance');
  // set remaing balance after expenses
  const remaining = income - totalCost;
  // console.log(balance)
  balance.innerText = remaining;
})

// handle save btn event handler
document.getElementById('save-btn').addEventListener('click', function () {
  // get remaining balance after expense
  const remainingAfterExpense = parseFloat(document.getElementById('balance').innerText);
  // get saving input and value and convet to floating number
  const saveInput = document.getElementById('save-input');
  const savingsText = saveInput.value;
  const savingsPercent = parseFloat(savingsText);

  // get saving amount
  const savingAmount = document.getElementById('saving-amount');
  // savings calculation 
  const savingsCalculation = (remainingAfterExpense * savingsPercent) / 100;
  savingAmount.innerText = savingsCalculation;
  //get remaining amount
  const remainingBalance = document.getElementById('remaining-balance')
  // remaining balance calculation 
  const remainingAfterSavings = remainingAfterExpense - savingsCalculation;
  remainingBalance.innerText = remainingAfterSavings;
})