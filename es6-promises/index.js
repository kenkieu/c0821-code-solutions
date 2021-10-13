const takeAChance = require('./take-a-chance');

const nameLottery = takeAChance('Ken');

nameLottery.then(fulfillment => console.log(fulfillment));
nameLottery.catch(error => console.log(error.message));
