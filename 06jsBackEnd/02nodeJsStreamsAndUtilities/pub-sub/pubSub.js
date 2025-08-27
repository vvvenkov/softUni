const events = {};

export function publish(eventType, eventData) {
    events[eventType].forEach(callback => callback(eventData));
}

export function subscribe(eventType, callback) {
    if (!events[eventType]) {
        events[eventType] = [];
    }

    events[eventType].push(callback);
}


