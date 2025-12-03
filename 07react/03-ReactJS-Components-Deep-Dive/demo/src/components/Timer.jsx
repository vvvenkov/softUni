import { useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    // let seconds = 0;

    setTimeout(() => {
        // seconds++;
        setSeconds(seconds + 1) // Disclaimer: There is a better way
    }, 1000);

    return (
        <section>
            <h2>Timer</h2>
            <div>{seconds} seconds</div>
        </section>
    );
}


