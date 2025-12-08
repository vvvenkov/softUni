import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router"

import Home from "./components/Home"
import Login from "./components/Login"
import Header from "./components/Header"
import Blog from './components/Blog';
import AuthGuard from './components/RouteGuard';
import Contact from './components/Contact';

function App() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const loginSubmitHandler = (event) => {
        event.preventDefault();


        const formData = new FormData(event.target);

        const { email, password } = Object.fromEntries(formData);

        if (email === 'ivo@abv.bg' && password === 'asdasd') {
            setUser({ email });
            return navigate('/');
        }
    }

    return (
        <div className="bg-white">
            <Header user={user} />

            <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login onSubmit={loginSubmitHandler} />} />
                <Route path="/contact" element={<Contact />} />
                <Route element={<AuthGuard user={user} />}>
                    <Route path="/blog" element={<Blog />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
