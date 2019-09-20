const robot = require('./robot')
const parser = require('./parser')

async function main(){
    const tokenHTML = await robot.getTokenHTML()
    const encryptedToken = parser.getEncryptedTokenFromHTML(tokenHTML)
    const answerHTML = await robot.fetchAnswerHTML(encryptedToken)
    
    const answer = parser.parseAnswerHTML(answerHTML)
    console.log('The answer is.:',answer)
}

main()