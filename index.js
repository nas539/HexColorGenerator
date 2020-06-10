
function hexidecimalColorGenerator() {
    let hexidecimalColor = Math.random().toString(16).substring(2, 8);
    return "Hexidecimal color: #" + hexidecimalColor;
}

console.log(hexidecimalColorGenerator());
