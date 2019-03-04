let convertTLCurrency = (amount) => {
    const converted = {
        USD: amount / 5.4,
        EUR: amount / 6.1
    }
    return converted
}

const { USD, EUR } = convertTLCurrency(1000)
console.log(USD, EUR)