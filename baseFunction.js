replacements = {
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
 tokenSplited = document.getElementById("token").value.split("")
for (t = 0; t < tokenSplited.length; t++)
    tokenSplited[t] = replacements.hasOwnProperty(tokenSplited[t]) ? replacements[tokenSplited[t]] : tokenSplited[t];
e = tokenSplited.join("")
console.log(e)
console.log(document.getElementById("token").value)