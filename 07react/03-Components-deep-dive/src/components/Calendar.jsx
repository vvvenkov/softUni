import { useState } from "react";

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]

export default function Calendar() {
    const [day, setDay] = useState(0);

    const nextDayClickHandler = () => {
        setDay(state => state + 1);
    }

    const resetDayClickHandler = () => {
        setDay(0);
    };

    if (day > 6) {
        return (
            <section>
                <h2>Calendar</h2>

                <strong>Invalid day</strong>

                <button onClick={resetDayClickHandler}>Reset Day</button>
            </section >
        )
    }

    const isWorkday = day < 5;

    return (
        <section>
            <h2>Calendar</h2>

            <h3>
                 {isWorkday
                    ? <span>Workday</span>
                    : <span>Weekend</span>
                }
            </h3>

            <div>Current day: {days.at(day)}</div>

            <button onClick={nextDayClickHandler}>Next Day</button>
        </section>
    );
}