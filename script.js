let num = 0
function setBalance() {
  accountBalance = parseFloat(document.getElementById("accountbalance").value);
  cashBalance = parseFloat(document.getElementById("cashbalance").value);
  num += 1
  logHistory(`${num} : Balances set: Account = ${accountBalance}, Cash = ${cashBalance}`);
}

function proceed() {
  const amount = parseFloat(document.getElementById("amount").value);
  const operation = document.getElementById("operation").value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (operation === "deposit") {
    cashBalance -= amount;
    accountBalance += amount;
    num += 1
    logHistory(`${num} : Deposited ${amount}. Account: ${accountBalance}, Cash: ${cashBalance}`);
  } else if (operation === "withdraw") {
    accountBalance -= amount;
    cashBalance += amount;
    num += 1
    logHistory(`${num} : Withdrew ${amount}. Account: ${accountBalance}, Cash: ${cashBalance}`);
  }

  document.getElementById("accountbalance").value = accountBalance;
  document.getElementById("cashbalance").value = cashBalance;
}

function logHistory(text) {
  const history = document.getElementById("history");
  history.value += "\n" + text;
}