const fs = require('fs')
const fetch = require('node-fetch')

const apiKey = ''

module.exports.countryTop = async (country) => {
    const data = await fetch('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=' + apiKey)

    const json = data.json()

    return json
}