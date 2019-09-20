const cheerio = require('cheerio')

const replacements = {
    'a': '\x7a',
    'b': '\x79',
    'c': '\x78',
    'd': '\x77',
    'e': '\x76',
    'f': '\x75',
    'g': '\x74',
    'h': '\x73',
    'i': '\x72',
    'j': '\x71',
    'k': '\x70',
    'l': '\x6f',
    'm': '\x6e',
    'n': '\x6d',
    'o': '\x6c',
    'p': '\x6b',
    'q': '\x6a',
    'r': '\x69',
    's': '\x68',
    't': '\x67',
    'u': '\x66',
    'v': '\x65',
    'w': '\x64',
    'x': '\x63',
    'y': '\x62',
    'z': '\x61',
    '0': '\x39',
    '1': '\x38',
    '2': '\x37',
    '3': '\x36',
    '4': '\x35',
    '5': '\x34',
    '6': '\x33',
    '7': '\x32',
    '8': '\x31',
    '9': '\x30'
};

function getEncryptedTokenFromHTML(tokenHTML){
    const rawToken = getTokenFromHTML(tokenHTML)
    const encryptedToken = encryptToken(rawToken)
    return encryptedToken
}

function getTokenFromHTML(tokenHTML){
    const $ = cheerio.load(tokenHTML)
    const rawToken = $('#token').attr('value')
    return rawToken
}

function encryptToken(rawToken){
    const splitToken = rawToken.split("")
    const transformedToken = splitToken.map(character => {
        return replacements.hasOwnProperty(character) ? replacements[character] : character
    })
    const encryptedToken = transformedToken.join("")
    return encryptedToken
}

function parseAnswerHTML(answerHTML){
    answerHTML = answerHTML.split(':')[1].trim()
    const $ = cheerio.load(answerHTML)
    return $('#answer').text()
}

module.exports = {
    getEncryptedTokenFromHTML: getEncryptedTokenFromHTML,
    parseAnswerHTML: parseAnswerHTML
}
