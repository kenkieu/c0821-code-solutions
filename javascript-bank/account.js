/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && Math.sign(amount) === 1) {
    var newDeposit = new Transaction('deposit', amount);
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
}

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && Math.sign(amount) === 1) {
    var newWithdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(newWithdrawal);
    return true;
  } else {
    return false;
  }
}

Account.prototype.getBalance = function () {
  if (this.transactions.length > 0) {
    var deposits = 0;
    var withdrawals = 0;
    for (i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        deposits += this.transactions[i].amount
      } else {
        withdrawals += this.transactions[i].amount
      }
    }
    var sum = deposits - withdrawals
    return sum;
  } else {
    return 0;
  }
}
