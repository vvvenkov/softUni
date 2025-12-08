import { Navigate, useNavigate } from "react-router";

export default function Redirect() {
    const navigate = useNavigate(); 

    const clickHandler = () => {
        navigate('/');
    }

    if (Math.random() < 0.5) {
        return <Navigate to="/about" />
    }

    return (
        <h2 onClick={clickHandler}>Not redirected!</h2>
    );
}
