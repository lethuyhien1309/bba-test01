//Bai 1
const characters = [
    { name: 'hien', level: 4, health: 1200 },
    { name: 'mai', level: 1, health: 100 },
    { name: 'hoa', level: 5, health: 1500 },
];

// Cách 1: map
function method1() {
    const result = characters.map(c => ({
        name: c.name.toUpperCase(),
        level: c.level * 2,
        health: c.health * 3
    }));

    console.log("C1 Sau khi thay đổi:", result);

    const winners = characters.filter(c => c.health > 1000);
    console.log("C1 Sau khi lọc:", winners);
}

// Cách 2: for...of
function method2() {
    const result = [];

    for (const c of characters) {
        result.push({
            name: c.name.toUpperCase(),
            level: c.level * 2,
            health: c.health * 3
        });
    }

    console.log("C2 Sau khi thay đổi:", result);

}

// Cách 3: forEach
function method3() {
    const result = [];

    characters.forEach(c => {
        result.push({
            name: c.name.toUpperCase(),
            level: c.level * 2,
            health: c.health * 3
        });
    });
    console.log("C3 Sau khi thay đổi:", result);

}

method1();
method2();
method3();


// Bài 2

const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 9000 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 7000 },
    { name: "hien", score: 10000 },

]
// cach so 1
// function printLeaderboard() {

//     players.sort((a, b) => b.score - a.score);
//     console.log('Sau khi sap xep mang:', players);
//     for (let i = 0; i <= 2; i++) {
//         let huychuong = "";
//         if (i === 0) {
//             console.log(huychuong = "🥇")
//         }
//         else if (i === 1) {
//             console.log(huychuong = "🥈")
//         }
//         else if (i === 2) {
//             console.log(huychuong = "🥉")
//         };
//         console.log((i + 1) + ". " + players[i].name + " - " + players[i].score + " pts");
//     }

// }
// printLeaderboard();

//cach so 2

function printLeaderboard(players) {
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

    const medals = ['🥇', '🥈', '🥉'];

    sortedPlayers.forEach((player, index) => {
        const medal = medals[index] || '';
        console.log(`${medal} ${index + 1}. ${player.name} - ${player.score} pts`);
    });

}
printLeaderboard(players);

