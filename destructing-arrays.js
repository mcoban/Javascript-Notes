const details = ['Müslüm Çoban', 123, 'mslmcbn.com']

// Old way
// const name = details[0]
// const id = details[1]
// const web = details[2]

const [name, id, website] = details
console.log(name, id, website)