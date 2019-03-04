const me = {
    first: 'Müslüm',
    last: 'Çoban',
    country: 'Turkey',
    city: 'Ankara',
    github: 'mcoban' 
}


// Old way
// const first = me.first
// const last = me.last


const { first, last, github } = me
console.log(`Hello my name is ${first} ${last} and my github is ${github}`)


const meDetail = {
    first: 'Ali',
    last: 'Veli',
    links: {
        social: {
            twitter: 'https://twitter.com/cbnmslm',
            instagram: 'https://www.instagram.com/cbnmslm/',
            github: 'https://github.com/mcoban'
        },
        web: {
            blog: 'http://mslmcbn.com/blog/'
        }
    }
}

// As you see we can change the key name of twitter as tweet
const { twitter: tweet, instagram } = meDetail.links.social
console.log(tweet, instagram)