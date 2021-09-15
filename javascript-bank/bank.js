/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && Math.sign(balance) === 1) {
    var newUser = new Account(this.nextAccountNumber, holder);
    newUser.transactions.push(balance);
    this.accounts.push(newUser);
    this.nextAccountNumber++;
    var userNumber = newUser.number;
    return userNumber;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function () {

};

Bank.prototype.getTotalAssets = function () {

};
