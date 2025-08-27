import { subscribe } from "./pubSub.js";

function report(info) {
    console.log(`Reporting System: ${info}`);
}

subscribe('deposit', report);
subscribe('withdraw', report);
