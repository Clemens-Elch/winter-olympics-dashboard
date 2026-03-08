import {useState} from "react";

const Events = () => {

        const [events, setEvents] = useState([
            { id: 1, date: "2026-02-06", name: "Opening Ceremony", location: "Milan" },
            { id: 2, date: "2026-02-09", name: "Nordic Combined Individual Gundersen (Men)", location: "Val di Fiemme", athlete: "Johannes Lamparter" },
            { id: 3, date: "2026-02-12", name: "Biathlon Sprint (Men)", location: "Antholz-Anterselva", athlete: "Simon Eder" },
            { id: 4, date: "2026-02-14", name: "Biathlon Pursuit (Men)", location: "Antholz-Anterselva", athlete: "David Komatz" }
            ]);

        function deleteEvent (id){
            setEvents(events.filter(event => event.id !== id));

    }

    return(
        <div>
            <ul>
                {events.map((event) => (
                <li key ={event.id}>
                    <p style={{ fontWeight: "bold" }}>Date: {event.date}</p>
                    <p> Event: {event.name} </p>
                    <p> Location: {event.location} </p>
                    <button onClick = {() => deleteEvent(event.id)}> Delete </button>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Events;