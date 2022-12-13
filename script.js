"use strict"

function ec(value, key) {
    key = key.repeat(Math.ceil(value.length/key.length))
    return value.split("").map((char, i) => String.fromCodePoint(char.charCodeAt() + key.split("")[i].charCodeAt())).join("")
}


function dc(value, key) {
    key = key.repeat(Math.ceil(value.length/key.length))
    return value.split("").map((char, i) => String.fromCodePoint(char.charCodeAt() - key.split("")[i].charCodeAt())).join("")
}
