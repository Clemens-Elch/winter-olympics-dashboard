import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import OlympicsHeader from "./components/OlympicsHeader.jsx";
import ReactQuestions from "./components/ReactQuestions.jsx";
import AthleteCard from "./components/AthleteCard.jsx";
import Events from "./components/Events.jsx";
import Countries from "./components/Countries.jsx";

function App() {

    return (
        <div>
            <div>
                <OlympicsHeader/>
                <h2>Opening Ceremony</h2>

                <AthleteCard
                    name="Johannes Lamparter"
                    country="Austria"
                    sport="Nordic Combined"
                />

                <AthleteCard
                    name="Simon Eder"
                    country="Austria"
                    sport="Biathlon"
                />

                <AthleteCard
                    name="David Komatz"
                    country="Austria"
                    sport="Biathlon"
                />
            </div>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route>
                            <Route path="/questions" element={<ReactQuestions/>}/>
                            <Route path="/events" element={<Events/>}/>
                            <Route path="/countries" element={<Countries/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;
