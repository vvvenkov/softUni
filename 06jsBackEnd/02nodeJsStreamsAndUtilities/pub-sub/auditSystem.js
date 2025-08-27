import { subscribe } from "./pubSub.js";

function audit(info) {
    console.log(`Audit System: ${info}`);
}

subscribe('deposit', audit);
