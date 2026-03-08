const AthleteCard = ({name, country, sport}) => {
    return(
        <div>
            <div>
                <h4>Name: {name}</h4>
                <p>Country: {country}</p>
                <p>Sport: {sport}</p>
            </div>
        </div>
    )
}

export default AthleteCard;