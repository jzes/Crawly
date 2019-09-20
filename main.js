const robot = require('./robot')
const parser = require('./parser')

async function main(){
    let tokenHTML = await robot.getTokenHTML()
    let encryptedToken = parser.getEncryptedTokenFromHTML(tokenHTML)
    let answerHTML = await robot.fetchAnswerHTML(encryptedToken)
    console.log(answerHTML);
    //let answer = parser.parseAnswerHTML(answerHTML)
    //console.log(answer)
}


main()