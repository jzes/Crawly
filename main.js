
async function main(){
    let token = await robot.getRawToken()
    let encryptedToken = parser.encryptToken(token)
    let answerHTML = robot.fetchAnswerHTML(encryptedToken)
    let answer = parser.parseAnswerHTML(answerHTML)
    console.log(answer)
}


main()