const axios = require('axios')

// this is the function directly get user info
// from github end console log
const getUserInfo = (userName) => {
    axios(`https://api.github.com/users/${userName}`)
        .then(res => res.data)
        .then(res => {
            console.log(res)
        })
}

// getUserInfo('mcoban')


/**
 * This is the promise function
 * that gets user info and return
 * this information as promise
 * @param {string} userName
 */
const getUserInfoPromise = (userName) => {
    return new Promise((resolve, reject) => {
        axios(`https://api.github.com/users/${userName}`)
            .then(res => res.data)
            .then(resolve)
            .catch(reject)
    })
}

getUserInfoPromise('mcoban')
    .then(info => {
        console.log(info)
    })