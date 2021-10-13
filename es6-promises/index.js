const takeAChance = require('./take-a-chance');

const nameLottery = takeAChance('Ken');
nameLottery.then(fulfillment => console.log(fulfillment)).catch(error => console.log(error.message));
