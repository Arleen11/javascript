const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums =myNumbers.map((num) => num + 10)

const newNums = myNumbers
.map((num) => num *10  )
.map((num) => num +1 )
.filter((num) => num>= 40)

//console.log(newNums);

// const array1 = [1,2,3,4,5]
// const iniValue = 0
// const sumWithValue = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, iniValue
// );
// console.log(sumWithValue);
 

const shoppingCart = [ 
    {
        itemName: 'js course',
        price: 123
    },
    {
        itemName: 'ui/ux course',
        price: 150
    },
    {
        itemName: 'java course',
        price: 2223
    },
    {
        itemName: 'app dev course',
        price: 1234
    },
 ]
 
 const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
 console.log(priceToPay);