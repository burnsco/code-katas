const check1 = (a, b) => a.includes(b);


console.log (check1 ([66, 101], 66));
console.log (check1 ([80, 117, 115, 104, 45, 85, 112, 115], 45));
console.log (check1 (['t', 'e', 's', 't'], 'e'));
console.log (check1 (['what', 'a', 'great', 'kata'], 'kat'));
