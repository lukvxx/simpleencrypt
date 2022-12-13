"use strict"

function ec(value, key) {
    key = key.repeat(Math.ceil(value.length/key.length)).split("")
    return value.split("").map((char, i) => String.fromCodePoint(char.charCodeAt() + key[i].charCodeAt())).join("")
}


function dc(value, key) {
    key = key.repeat(Math.ceil(value.length/key.length)).split("")
    return value.split("").map((char, i) => String.fromCodePoint(char.charCodeAt() - key[i].charCodeAt())).join("")
}
