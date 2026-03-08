import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import OlympicsHeader from "./components/OlympicsHeader.jsx";
import ReactQuestions from "./components/ReactQuestions.jsx";
import AthleteCard from "./components/AthleteCard.jsx";
import Events from "./components/Events.jsx";
import Countries from "./components/Countries.jsx";
import Layout from "./components/Layout.jsx";
import EventDetails from "./components/EventDetails.jsx";

function App() {

    return (
        <div>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route path="events" element={<Events/>}/>
                            <Route path="events/:id" element={<EventDetails />} />
                            <Route path="countries" element={<Countries/>}/>
                            <Route path="reactQuestions" element={<ReactQuestions/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
            <div>
                <OlympicsHeader/>

                <h3>3 Austrian Athletes:</h3>

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
        </div>
    )
}

export default App;
