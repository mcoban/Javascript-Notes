let sumAll = (...numbers) => {
    let num = 0
    numbers.reduce(n => { num += n })
    console.log(num)
}

sumAll(1,2,3,4,7,9,12)