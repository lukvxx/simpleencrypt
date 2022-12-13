

function ec(value, key) {
    let nk;
    if (value.length >= key.length) { nk = key.repeat(Math.ceil(value.length/key.length)) } else { nk = key }
    return value.split("").map((char, i) => String.fromCodePoint(char.charCodeAt() + nk.split("")[i].charCodeAt())).join("")
}


function dc(value, key) {
    let nk;
    if (value.length >= key.length) { nk = key.repeat(Math.ceil(value.length/key.length)) } else { nk = key }
    return value.split("").map((char, i) => String.fromCodePoint(char.charCodeAt() - nk.split("")[i].charCodeAt())).join("")
}
