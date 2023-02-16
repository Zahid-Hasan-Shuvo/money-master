document.getElementById("calc-btn").addEventListener("click", function () {
  // for food
  const foodElement = document.getElementById("food");
  const foodValueString = foodElement.value;
  const foodValueInt = parseInt(foodValueString);

  // for Rent
  const rentElement = document.getElementById("rent");
  const rentValueString = rentElement.value;
  const rentValueInt = parseInt(rentValueString);

  // for Clothes
  const clothElement = document.getElementById("cloth");
  const clothValueString = clothElement.value;
  const clothValueInt = parseInt(clothValueString);

  const totalSum = foodValueInt + rentValueInt + clothValueInt;

  const totalExpenseField = document.getElementById("total-expense");
  totalExpenseField.innerText = totalSum;

  const incomeField = document.getElementById("income");
  const incomeFieldString = incomeField.value;
  const incomeFieldInt = parseInt(incomeFieldString);

  const balanceField = document.getElementById("balance");

  balanceField.innerText = incomeFieldInt - totalSum;
});

document.getElementById("save-btn").addEventListener("click", function () {
  const saveField = document.getElementById("save-input");
  const saveValueString = saveField.value;
  const saveValueInt = parseInt(saveValueString);

  const discountValue = saveValueInt / 100;
  const totalExpenseField = document.getElementById("total-expense").innerText;
  const discount = totalExpenseField * discountValue;

  const savingAmount = document.getElementById("saving-amount");
  savingAmount.innerText = discount;

  const remainingBalance = document.getElementById("remaining-balance");
  const balanceField = document.getElementById("balance");
  const remainingTaka = balanceField.innerText;
  const result = remainingTaka - discount;
  remainingBalance.innerText = result;
});
