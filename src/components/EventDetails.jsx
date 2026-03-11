import { useParams } from "react-router-dom";

const EventDetails = ({ events }) => {

    const { eventId } = useParams();

    const event = events.find(e => e.id === parseInt(eventId));

    if (!event) {
        return <p>Event not found</p>;
    }

    const isPastEvent = new Date(event.date) < new Date();

    return (
        <div>
            <h2>{event.name}</h2>
            <p  style={{color: isPastEvent ? "red" : ""}}>Date: {event.date}</p>
            <p>Location: {event.location}</p>
        </div>
    );
};

export default EventDetails;