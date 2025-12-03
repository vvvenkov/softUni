import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementClickHandler = (event) => {
        // console.log(event);
        // setCount(count + 1); // NOT RECOMMENDED Race condition prone
        setCount(prevState => prevState + 1); // Race condition safe
    }

    return (
        <section>
            <h2>Counter</h2>

            <div>Count: {count}</div>

            <button onClick={incrementClickHandler}>+</button> 
        </section>
    )
}
