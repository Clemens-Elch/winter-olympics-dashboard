import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import OlympicsHeader from "./components/OlympicsHeader.jsx";
import ReactQuestions from "./components/ReactQuestions.jsx";
import AthleteCard from "./components/AthleteCard.jsx";
import Events from "./components/Events.jsx";
import Countries from "./components/Countries.jsx";
import Layout from "./components/Layout.jsx";
import EventDetails from "./components/EventDetails.jsx";
import {useState} from "react";
import Home from "./components/Home.jsx";

function App() {

    const [events, setEvents] = useState([
        { id: 1, date: "2026-02-06", name: "Opening Ceremony 2026", location: "Milan" },
        { id: 2, date: "2026-02-09", name: "Nordic Combined Individual Gundersen (Men)", location: "Val di Fiemme", athlete: "Johannes Lamparter" },
        { id: 3, date: "2026-02-12", name: "Biathlon Sprint (Men)", location: "Antholz-Anterselva", athlete: "Simon Eder" },
        { id: 4, date: "2026-02-14", name: "Biathlon Pursuit (Men)", location: "Antholz-Anterselva", athlete: "David Komatz" },
        { id: 5, date: "2030-02-08", name: "Opening Ceremony 2030", location: "French Alps" }
    ]);

    return (
        <div>
            <div>
                <BrowserRouter>


                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="events" element={<Events events={events} setEvents={setEvents}/>}/>
                            <Route path="events/:eventId/eventsDetails" element={<EventDetails events={events}/>} />
                            <Route path="countries" element={<Countries/>}/>
                            <Route path="reactQuestions" element={<ReactQuestions/>}/>
                        </Route>
                    </Routes>


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
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;
