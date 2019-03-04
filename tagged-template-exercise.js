let addAbbreviation = (strings, ...values) => {
    const abbreviated = values.map((v, i) => {
        if (dict[v]) {
            return `${strings[i]} <abbr title="${dict[v]}">${dict[v]}</abbr>`
        }
        return `${strings[i]} ${v}`
    })
    return abbreviated
}


const dict = {
    HTML: 'Hyper Text Markup Language',
    CSS: 'Cascading Style Sheet',
    JS: 'Javascript'
}

const first = 'Müslüm'
const last = 'Çoban'
const sentence = addAbbreviation`Hello my name is ${first} ${last} and I love to code ${'HTML'} ${'CSS'} ${'JS'}`

console.log(sentence)