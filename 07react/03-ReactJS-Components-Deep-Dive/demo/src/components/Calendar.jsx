import { useState } from "react";

export default function Calendar() {
    const [day, setDay] = useState(0);

    const nextDayClickHandler = () => {
        setDay(state => state + 1);
    };

    const resetDayClickHandler = () => {
        setDay(0);
    };

    let currentDay;

    switch (day) {
        case 0:
            currentDay = <strong>Monday</strong>;
            break;
        case 1:
            currentDay = <strong>Tuesday</strong>;
            break;
        case 2:
            currentDay = <strong>Wednesday</strong>;
            break;
        case 3:
            currentDay = <strong>Thursday</strong>;
            break;
        case 4:
            currentDay = <strong>Friday</strong>;
            break;
        case 5:
            currentDay = <strong>Saturday</strong>;
            break;
        case 6:
            currentDay = <strong>Sunday</strong>;
            break;
    }

    if (day > 6) {
        return (
            <section>
                <h2>Calendar</h2>

                <p>Invalid Day</p>

                <button onClick={resetDayClickHandler}>Reset Day</button>
            </section>
        )
    }

    const isWorkday = day < 5;

    // isWorkday && 'Pesho' // truthy && any -> any
    // isWorkday && 'Pesho' // falsy && any -> falsy
    // isWorkday || 'Pesho' // truthy || any -> truthy
    // isWorkday || 'Pesho' // falsy || any -> any

    return (
        <section>
            <h2>Calendar</h2>

            <div>Current Day {currentDay}</div>

            <h3>
                {isWorkday
                    ? <span>Workday</span>
                    : <span>Weekend</span>
                }
            </h3>

            {isWorkday && (
                <div>
                    <h3>Work Schedule</h3>

                    <ul>
                        <li>First</li>
                        <li>Second</li>
                        <li>Third</li>
                    </ul>
                </div>
            )}

            <button onClick={nextDayClickHandler}>Next Day</button>
        </section>
    );
}
