const cheerio = require('cheerio')

const replacements = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a"
};

function encryptToken(tokenHTML){
    let $ = cheerio.load(tokenHTML)
    let rawToken = $('#token').attr('value')
    splitToken = rawToken.split("")
    transformedToken = splitToken.map(character => {
        return replacements.hasOwnProperty(character) ? replacements[character] : character
    })
    encryptedToken = transformedToken.join("")
    console.log(encryptedToken)
}

module.exports = {
    encryptToken: encryptToken
}
