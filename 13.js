"use strict";

var addresses = require('./addresses');
var result = [];

for (var i = 0; i < addresses.length; i++) {
    var curentObject = {};
    if (/\d+/g.exec(addresses[i])) {
    var houseArr = /\d+/.exec(/\d+/.exec(/((\s[0-9а-яА-ЯёЁ\-\s]+\s+)|(,\s)|((дом)\s+))\d+/g.exec(addresses[i]))[0]);//масив буд
    var streetArr = /([^(\s|пр-т|ул|пл|пер|\.\-)?][0-9а-яА-ЯёЁ\-\s\.]+)/.exec(addresses[i]);// масив вул
        curentObject.street =  streetArr[0];
        curentObject.house = houseArr[0];
        var dataArray = addresses[i].match(/\d+/g);//масив
            for (var j=0; j<dataArray.length; j++) {// провіряю якому з елементів масиву відповідає число
                if (curentObject.house == dataArray[j] && dataArray[j + 1] != null) {
                   curentObject.flat = dataArray[j + 1];
                }
             }
        result.push(curentObject);
    } else {
        curentObject.street = /([^(\s|пр-т|ул|пл|пер|\.\-)?][0-9а-яА-ЯёЁ\-\s\.]+)/.exec(addresses[i])[0];
        curentObject.house = "Будинку нема!";
           result.push(curentObject);
    }
       console.log(JSON.stringify(result, null, 2));
}
module.exports =result;

// ... some good code ...

/*
приклад структури масиву result
>>> result
[
  ...
  {
    "street": 'Юности', //string
    "house": '25',      //string
    "flat": '6'         //string
  }
 ...
]
*/








