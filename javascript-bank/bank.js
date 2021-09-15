/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var newUser = new Account(this.nextAccountNumber, holder);
    var newDeposit = new Transaction('deposit', balance)
    this.accounts.push(newUser);
    this.nextAccountNumber++
    var userNumber = newUser.number
    return userNumber;
  } else {
    return null;
  }
}
