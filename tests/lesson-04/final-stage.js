let count = 0;
function findPairsDivisibleBy17() {
for ( let i = 1 ; i<=100; i++) {
    for (let j = i; j <= 100; j++) {
        if((i+j) % 17 === 0 ) {
            console.log("Cặp số:" + "(" + i + "," + j+  ")" + "=" + (i+j) );
            count ++;
        }
    }
}
}
findPairsDivisibleBy17();
console.log(`\Tổng cộng : ${count} cặp`);