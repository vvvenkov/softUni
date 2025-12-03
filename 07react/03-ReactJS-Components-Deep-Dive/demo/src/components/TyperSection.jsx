import { useState } from "react";
import Typer from "./Typer.jsx";

export default function TyperSection() {
    const [isStopped, setIsStopped] = useState(false);

    const pauseToggleHandler = () => {
        setIsStopped(state => !state);
    }

    return (
        <section>
            <h2>Typer</h2>

            {isStopped
                ? <p className="fancy-text">Typer is stopped!</p>
                : <Typer />
            }

            <button onClick={pauseToggleHandler}>{isStopped ? 'Start' : 'Stop'}</button>
        </section>
    );
}
