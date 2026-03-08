import {useState} from "react";

const AthleteCard = ({name, country, sport}) => {

    const [medalCounter, setMedalCounter] = useState(0);

    return(
        <div>
            <div>
                <h4>Name: {name}</h4>
                <p>Country: {country}</p>
                <p>Sport: {sport}</p>

                <p>Medals: {medalCounter}</p>
                <button onClick={()=> setMedalCounter(medalCounter+1)}> <strong>+</strong> </button>
                <button onClick={()=> setMedalCounter(medalCounter-1)}> <strong>-</strong> </button>
                <button onClick={()=> setMedalCounter(0)}> <strong>Reset</strong> </button>

            </div>
        </div>
    )
}

export default AthleteCard;