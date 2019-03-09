// let x = [...'muslum']
// [ 'm', 'u', 's', 'l', 'u', 'm' ]

const fruits = ['apple', 'strawbery', 'orange']
const names = ['ali', 'veli', 'deli']

const merged = [...fruits, ...names]
console.log(merged)

const inventors = ['einstein', 'newton', 'galileo']
const newInvestors = ['musk', 'jobs']

inventors.push(...newInvestors)
console.log(inventors)


let name = ['ali', 'veli']
let sayHi = (first, last) => {
    console.log(`Hello ${first} ${last}`)
}

sayHi(...name)