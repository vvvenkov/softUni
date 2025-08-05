function dungeonestDark(arr) {
    let rooms = arr[0].split("|");
    let health = 100;
    let coins = 0;
    let roomCount = 0;

    for (let room of rooms) {
        let commands = room.split(" ");
        let command = commands[0];
        let value = Number(commands[1]);
        roomCount++;

        switch (command) {
            case "potion":
                health = health + value;
                if (health > 100) {
                    value = 100 - (health - value);
                    console.log(`You healed for ${value} hp.`);
                    console.log(`Current health: 100 hp.`);
                    health = 100;
                } else {
                    console.log(`You healed for ${value} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
                break;
            case "chest":
                coins += value;
                console.log(`You found ${value} coins.`);
                break;
            default:
                health -= value;
                if (health <= 0) {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomCount}`);
                    return;
                } else {
                    console.log(`You slayed ${command}.`);
                }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])