import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import OlympicsHeader from "./components/OlympicsHeader.jsx";
import ReactQuestions from "./components/ReactQuestions.jsx";
import AthleteCard from "./components/AthleteCard.jsx";

function App() {

    return (
        <div>
            <div>
                <OlympicsHeader/>
                <AthleteCard
                    name="Felix Gottwald"
                    country="Austria"
                    sport="Nordic Combined"
                />

                <AthleteCard
                    name="Simon Eder"
                    country="Austria"
                    sport="Biathlon"
                />

                <AthleteCard
                    name="Christop Suman"
                    country="Austria"
                    sport="Biathlon"
                />
            </div>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route>
                            <Route path="/dev" element={<ReactQuestions/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;
