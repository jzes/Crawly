const reqPromise = require('request-promise')

const mainURL = "http://applicant-test.us-east-1.elasticbeanstalk.com/"

async function getTokenHTML(){
    try{
        let html = await reqPromise(mainURL)
        return html
    }catch{
        console.log('Token request cannot be completed')
        process.abort()
    }
}

module.exports = {
    getTokenHTML: getTokenHTML
}