import {useEffect, useState} from "react";

const Countries = () => {

    const [inputCountry, setInputCountry] = useState("");
    const [country, setCountry] = useState("");
    const [countryFlag, setCountryFlag] = useState("");

    useEffect(() => {
        if (!country) return;

        fetch(`https://restcountries.com/v3.1/name/${country}?fields=flags`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0){
                    setCountryFlag(data[0].flags.png);
                }
            });
    }, [country]);

    function handleFlagSearch(e) {
        e.preventDefault();
        setCountryFlag("");
        setCountry(inputCountry);
    }

    return (
        <div>
            <form onSubmit={handleFlagSearch}>
                <label>Enter a country:
                    <input type="text"
                           value={inputCountry}
                           onChange={(e) => setInputCountry(e.target.value)}
                    />
                </label>
                <input type="submit" value="Search"/>
            </form>
            {/*conditional rendering with &&*/}
            {countryFlag && <img src={countryFlag} alt="flag"/>}

        </div>

    )
};

export default Countries;