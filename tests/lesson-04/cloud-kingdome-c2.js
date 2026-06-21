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