const person = {
    name: 'Müslüm',
    job: 'Frontend Engineer',
    city: 'Ankara'
}

// You can create html tag
const markup = `
    <h2>${person.name}</h2>
    <p class="job">${person.job}</p>
    <p class="city">${person.city}</p>
`

console.log(markup)