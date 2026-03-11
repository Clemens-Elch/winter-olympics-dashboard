import {Link} from "react-router-dom";

const Events = ({events, setEvents}) => {


        function deleteEvent (id){
            setEvents(events.filter(event => event.id !== id));
    }
    return(
        <div>
            <ul style={{listStyle: "none"}}>
                {events.map((event) => (
                <li key ={event.id}>
                    <h3 style={{fontWeight: "bold", color: "green"}}> Event: {event.name} </h3>
                    <Link to= {`/events/${event.id}/eventsDetails`}>
                        <button>Event Details</button>
                    </Link>
                    <button onClick = {() => deleteEvent(event.id)} style={{marginLeft: "75px"}}> Delete </button>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Events;