// const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// //const newNums = myNums.filter( (num)=> num > 5) // filters the data in the array


// const newNums = []

// myNums.forEach((num) => {
//     if (num >5) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {title : 'book 1', genre : 'fiction', publish: 1985, edition : 2001},
    {title : 'book 2', genre : 'mystery', publish: 1986, edition : 2000},
    {title : 'book 3', genre : 'crime', publish: 1987, edition : 2003},
    {title : 'book 4', genre : 'action', publish: 1988, edition : 2004},
    {title : 'book 5', genre : 'sci fi', publish: 1989, edition : 2005},
]; // sort of database

// const userBooks = books.filter((bk) => bk.genre === 'fiction')
let userBooks = books.filter((bk) => bk.publish  == '1986' || bk.genre === 'sci fi')

console.log(userBooks);