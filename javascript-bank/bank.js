/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && Math.sign(balance) === 1) {
    var newUser = new Account(this.nextAccountNumber, holder);
    newUser.deposit(balance);
    this.accounts.push(newUser);
    this.nextAccountNumber++;
    var userNumber = newUser.number;
    return userNumber;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var deposits = 0;
  var withdrawals = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts.length > 0) {
      for (var x = 0; x < this.accounts[i].transactions.length; x++) {
        if (this.accounts[i].transactions[x].type === 'deposit') {
          deposits += this.accounts[i].transactions[x].amount;
        } else {
          withdrawals += this.accounts[i].transactions[x].amount;
        }
      }
    } else {
      return 0;
    }
  }
  var totalAssets = deposits - withdrawals;
  return totalAssets;
};
