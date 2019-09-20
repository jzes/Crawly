replacements = {
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
tokenSplited = document.getElementById("token").value.split("")
for (t = 0; t < tokenSplited.length; t++)
    tokenSplited[t] = replacements.hasOwnProperty(tokenSplited[t]) ? replacements[tokenSplited[t]] : tokenSplited[t];
e = tokenSplited.join("")
console.log(e)
console.log(document.getElementById("token").value)



f16fa5f1838a7ff43acf5523ff5f974e
f83fa4f8161a2ff56acf4476ff4f025e

3388d493ce798c7e22cc6695975f431a
3388d493ce798c7e22cc6695975f431a