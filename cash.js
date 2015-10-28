var chalk = require('chalk');

var coins = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
var numbers = ["หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];
var digits = ["สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];

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

  getText: function(cash) {

    var text = '';

    var cashText = cash.toString();
    var length = cashText.length;

    text += numbers[cashText[0] - 1];
    text += digits[length - 2];

    return text + "บาท";

  }
}

module.exports = cash;
