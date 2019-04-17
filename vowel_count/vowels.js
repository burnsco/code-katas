function getCount(str) {
    if (str.length < 1) return;
    let testRegex = /[a,e,i,o,u]/ig;
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(testRegex)) {
            vowels++;
        }
    }
    return vowels;
}


console.log(getCount("abracadabra"))