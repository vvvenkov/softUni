import eventEmitter from "./pubSub.js";

function audit(info) {
    console.log(`Audit System: ${info}`);
}

eventEmitter.on('deposit', audit)

