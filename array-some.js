const ages = [12, 14, 20, 9, 40, 4]

// is there at least one who is adult
const adultExists = ages.some(age => age >= 18)
console.log(adultExists)

// Are all of them is adult
const everyOneIsAdult = ages.every(age => age >= 18)
console.log(everyOneIsAdult)