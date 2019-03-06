/*
    in this code below, we can easily find any object that we want
    with the help of es6 feature without like lodash
*/
let persons = [
    {
        id: 1,
        name: 'ali veli'
    }, 
    {
        id: 2,
        name: 'deli meli'
    },
    {
        id: 3,
        name: 'ahmet'
    },
    {
        id: 4,
        name: 'mehmet'
    }
]

const ahmetId = 3
let ahmet = persons.find(person => person.id === ahmetId)
console.log(ahmet)