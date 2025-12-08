import { Routes, Route } from "react-router"

import Home from "./components/Home";
import Login from "./components/Login";


function App() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes >
		</>
	)
}

export default App
