function findShort(s) {
     s = s
     .split(" ")
     .sort((a,b) =>  a.length - b.length);
     return s[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));