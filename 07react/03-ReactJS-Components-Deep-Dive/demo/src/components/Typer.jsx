import { useEffect, useState } from "react";

export default function Typer() {
    const [key, setKey] = useState('Press any key to start!');

    useEffect(() => {
        const keyPressHandler = (event) => {
            console.log(event.key);
            
            setKey(event.key);
        };
        
        window.addEventListener('keypress', keyPressHandler);

        return () => {
            window.removeEventListener('keypress', keyPressHandler);
        }
    }, []);

    useEffect(() => {
        console.log('Mount')
    }, []);

    useEffect(() => {
        console.log('Update Key')
    }, [key])

    useEffect(() => {
        return () => {
            console.log('Unmount')
        }
    }, [])

    return (
        <div>
            <p>Pressed Key</p>
            <strong>{key}</strong>
        </div>
    );
}
