const reqPromise = require('request-promise').defaults({ jar: true });

const mainURL = "http://applicant-test.us-east-1.elasticbeanstalk.com/"

let PHPSessionID

async function getTokenHTML() {

    const options = {
        method: 'GET',
        uri: mainURL,
        resolveWithFullResponse: true
    };

    try {
        const response = await reqPromise(options)
        fillPHPSessionID(response)
        return response.body
    } catch (err) {
        console.log('Token request cannot be compconsted\n', err)
        process.abort()
    }
}

function fillPHPSessionID(response){
    PHPSessionID = response.headers['set-cookie']
    .filter(cookie => {
        return cookie.includes('PHPSESSID')
    })[0].split(';')[0]
}

async function fetchAnswerHTML(encryptedToken) {
    const options = {
        method: 'POST',
        uri: mainURL,
        headers:
        {
            'cache-control': 'no-cache',
            Cookie: PHPSessionID,
            'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,fr;q=0.6',
            'Accept-Encoding': 'gzip, deflate',
            Referer: 'http://applicant-test.us-east-1.elasticbeanstalk.com/',
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Upgrade-Insecure-Requests': '1',
            Origin: 'http://applicant-test.us-east-1.elasticbeanstalk.com',
            'Cache-Control': 'max-age=0',
            Connection: 'keep-alive'
        },
        form:
        {
            token: encryptedToken
        }
    }

    const html = await reqPromise(options)
    return html
}

module.exports = {
    getTokenHTML: getTokenHTML,
    fetchAnswerHTML: fetchAnswerHTML
}