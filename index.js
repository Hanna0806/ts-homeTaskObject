"use strict";
const totalData = {
    jackets: 5,
    hats: 'empty',
    socks: 'empty',
    pants: 15,
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: 'empty',
    mixers: 14,
    deficit: true,
    date: new Date(),
};
console.log(totalData);
function printReport(data) {
    const arrData = [];
    for (let key in data) {
        if (data[key] == 'empty') {
            arrData.push(key);
        }
    }
    console.log(arrData);
    if (arrData.length) {
        console.log(`нужны следующие элементы одежды: ${arrData}`);
    }
    else {
        console.log('все в наличии');
    }
}
printReport(totalData);
