var chalk = require('chalk');

var coins = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
var cash = {

  getChange: function(price, cashPaid) {
    var change = [];
    var remaining = cashPaid - price;
    var length = coins.length;

    console.log(chalk.magenta('Price : ' + price));
    console.log(chalk.magenta('Paid : ' + cashPaid));
    console.log(chalk.magenta('================='));

    for (var i = 0; i < length; i++) {
      var coin = coins[i];

      if (remaining / coin >= 1) {

        var times = Math.floor(remaining / coin);
        console.log(chalk.magenta('Coin : ' + coin + ' x ' + times));

        for (j = 0; j < times; j++) {
          change.push(coin);
          remaining -= coin;
        }
      }

    }

    return change;
  },

  getText: function() {

  }
}

module.exports = cash;
