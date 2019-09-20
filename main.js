const robot = require('./robot')

async function main(){
    let tokenHTML = await robot.getTokenHTML()
    console.log(tokenHTML);
    // let encryptedToken = parser.encryptToken(tokenHTML)
    // let answerHTML = robot.fetchAnswerHTML(encryptedToken)
    // let answer = parser.parseAnswerHTML(answerHTML)
    //console.log(answer)
}


main()