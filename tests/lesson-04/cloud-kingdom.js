//Cách 1
let playerName = 'Mario';
let currentLives = 3;

const coin = {
    level1: 25,
    level2: 30,
    level3: 45
}
let sum =coin.level1+coin.level2+ coin.level3;
console.log(`Tong la: ${sum}`);
console.log(`So coin du sau khi chia 3:${sum%3}`);

//Cách 2
let playerName = 'Mario';
let currentLives = 3;
const coin = [25, 30, 45];
let sum = 0;

for (let i = 0; i < coin.length; i++) {
    //consolog(sum)
    sum += coin[i];
}
console.log("Tổng các phần tử level:",sum);
console.log("Giá trị trung bình các phần tử:",sum%coin.length);











