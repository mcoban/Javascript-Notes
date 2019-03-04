// if you dont know how many args there are
// you can use es6 rest operator with 3 dots
let highlight = (strings, ...values) => {
    let str = ''
    values.map((value, i) => {
        str += `${strings[i]} <strong>${value}</strong>`
    })
    str += strings[values.length]
    return str
}

const name = `Müslüm`
const age = 32

const sentence = highlight`Hello my name is ${name} and I am ${age} years old`
console.log(sentence)