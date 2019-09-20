const robot = require('./robot')
const parser = require('./parser')

async function main(){
    let tokenHTML = `<html>
    <head>
        <script src="adpagespeed.js"></script>
    </head>
    <body>
    <form action="/" method="post" id="form">
        <input type="hidden" name="token" id="token" value="xv6z7912u04yx26vz1046uxx07vz7yz3" />
        <input type="button" value="Descobrir resposta" onClick="findAnswer()">
    </form>
    </body>
    </html>
    `//await robot.getTokenHTML()
    let encryptedToken = parser.encryptToken(tokenHTML)
    console.log(encryptedToken);
    // let answerHTML = robot.fetchAnswerHTML(encryptedToken)
    // let answer = parser.parseAnswerHTML(answerHTML)
    //console.log(answer)
}


main()