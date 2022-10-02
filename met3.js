function doubleChar(str) {
    return str.split("").map(function (c) {
        return c + c;
    }).join("");
}