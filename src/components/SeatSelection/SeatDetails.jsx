import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { seatAvailability } from "../Data/SeatDetails";
import arrows from "../Assets/exchange.png";
import BookedDetails from "./BookedDetails";

function SeatDetails() {
  const [available, setAvailability] = useState([]);
  const [city, setCity] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeInput, setActiveInput] = useState("");

  const [pop, setPop] = useState(false);

  useEffect(() => {
    const details = seatAvailability();
    setAvailability(details);
  }, []);

  useEffect(() => {
    axios
      .get("https://in-city-e66a8-default-rtdb.firebaseio.com/city.json")
      .then((response) => {
        setCity(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSourceChange = (event) => {
    setSource(event.target.value);
    setActiveInput("source");
    if (event.target.value === "") {
      setSearchResults([]);
      return;
    }
    const filteredResults = city.filter((item) =>
      item.city.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const onDestinationChange = (event) => {
    setDestination(event.target.value);
    setActiveInput("destination");
    if (event.target.value === "") {
      setSearchResults([]);
      return;
    }
    const filteredResults = city.filter((item) =>
      item.city.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const onCitySelect = (city) => {
    if (activeInput === "source") {
      setSource(city);
    } else if (activeInput === "destination") {
      setDestination(city);
    }
    setSearchResults([]);
  };

  const bookHandler = () => {
    setPop((prevPop) => !prevPop);
    console.log(pop);
  };

  return (
    <React.Fragment>
      <div className="available">
        {available.map((each) => (
          <div className="ava-container" key={each.id}>
            <h4>{each.name}</h4>
            {each.id === "AVA" ? (
              <span className="material-symbols-outlined ava">chair</span>
            ) : (
              ""
            )}
            {each.id === "BKD" ? (
              <span className="material-symbols-outlined bkd">chair</span>
            ) : (
              ""
            )}
            {each.id === "SEL" ? (
              <span className="material-symbols-outlined sel">chair</span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <div className="location-search">
        <input
          type="search"
          placeholder="Enter Source"
          value={source}
          onChange={onSourceChange}
        />
        <img src={arrows} alt="arrow" />
        <input
          type="search"
          placeholder="Enter Destination"
          value={destination}
          onChange={onDestinationChange}
        />

        {searchResults.length > 0 && (
          <div className="search-container">
            {searchResults.map((result) => (
              <li key={result.city} onClick={() => onCitySelect(result.city)}>
                {result.city}
              </li>
            ))}
          </div>
        )}

        <button disabled={!source || !destination} onClick={bookHandler}>
          Book
        </button>
      </div>

      <BookedDetails  />
    </React.Fragment>
  );
}

export default SeatDetails;
