import './App.css'
import Calendar from './components/Calendar.jsx'
import Counter from './components/Counter.jsx'
import MovieList from './components/MovieList.jsx'
import StyledComponent from './components/StyledComponent.jsx'
import Swapi from './components/Swapi.jsx'
import Timer from './components/Timer.jsx'
import TyperSection from './components/TyperSection.jsx'

function App() {
    return (
        <div>
            <h1>Component Deep Dive</h1>

            <Timer />

            <Counter />

            <Calendar />

            <MovieList />

            <TyperSection />

            <StyledComponent />

            <Swapi />
        </div>
    )
}

export default App
