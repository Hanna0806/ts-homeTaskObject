interface TotalWarehouse {
    jackets: number,
    hats: 'empty' | number,
    socks: 'empty' | number,
    pants: number,
    scissors: number,
    paper: boolean,
    dishwashers: number,
    cookers: 'empty' | number,
    mixers: number,
    deficit: boolean,
    date: Date,
}
const totalData: TotalWarehouse = {
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
}


console.log(totalData);

function printReport(data: TotalWarehouse): void {
    const arrData: string [] = [];
    for (let key in data) {
        if(data[key] == 'empty') {
            arrData.push(key)
        }
    }
    console.log(arrData)

    if (arrData.length) {
        console.log(`нужны следующие элементы одежды: ${arrData}`)
    } else {
        console.log('все в наличии')
    }
}
printReport(totalData)