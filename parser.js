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
    var rawToken = getTokenFromHTML(tokenHTML)
    var encryptedToken = encryptToken(rawToken)
    return encryptedToken
}

function getTokenFromHTML(tokenHTML){
    let $ = cheerio.load(tokenHTML)
    let rawToken = $('#token').attr('value')
    return rawToken
}

function encryptToken(rawToken){
    let splitToken = rawToken.split("")
    let transformedToken = splitToken.map(character => {
        return replacements.hasOwnProperty(character) ? replacements[character] : character
    })
    let encryptedToken = transformedToken.join("")
    return encryptedToken
}

module.exports = {
    getEncryptedTokenFromHTML: getEncryptedTokenFromHTML
}
