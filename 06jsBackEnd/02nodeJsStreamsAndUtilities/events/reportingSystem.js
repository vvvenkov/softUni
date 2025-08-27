import eventEmitter from "./pubSub.js";

function report(info) {
    console.log(`Reporting System: ${info}`);
}

eventEmitter.on('deposit', report);
eventEmitter.on('withdraw', report);
