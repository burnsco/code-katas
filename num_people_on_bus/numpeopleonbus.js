// my version
const number = (busStops) => busStops.map((x) => x[0] - x[1]).reduce((x,y) => x + y);
const number1 = (busStops) => busStops.reduce((z, [x, y]) => z + x - y, 0);
const number2 = (busStops) => busStops.reduce((z, [x, y]) => z + x - y, 0);

console.log(number2([[10,0],[3,5],[5, 8]]));
console.log(number2([[3,0],[9,1],[4,10],[12, 2], [6, 1], [7, 10]]));
console.log(number2([[3,0],[9,1],[4,8],[12, 2], [6, 1], [7, 8]]));




