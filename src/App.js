import React, { useState } from "react";
// import Categories from "./Categories";
import "./styles.css";

function App() {
  // var [Cities, setCities] = useState("");
  var [places, setPlaces] = useState("");

  var cityCategories = {
    mumbai: [
      "marine line : 4/5",
      "gate way of india : 4.5/5",
      "bandstand : 3.5/5",
      "siddhivinayak mandir : 5/5"
    ],
    kolkata: ["Eco park : 5/5", "park street : 4.5/5", "Howrah Bridge : 3/5"],
    delhi: [
      "akshardham : 3.5/5",
      "India gate : 3/5",
      "Iskon temple :5/5",
      "Red fort : 4/5"
    ]
  };

  var CitiesArray = Object.keys(cityCategories);

  var citiesMapArray = CitiesArray.map((item) => {
    return item;
  });

  function onCitiesClicked(item) {
    var CitiesArray = cityCategories[item];

    var PlaceArray = CitiesArray.map((place) => {
      return place;
    });
    setPlaces(PlaceArray);
  }
  var placesArray = [];
  placesArray = places;

  return (
    <div className="App">
      <h1 className="heading">Travel Places </h1>
      <p>Checkout Tourist Places to Visit in Cities</p>
      <div className="Categories">
        <div>
          {citiesMapArray.map((item) => {
            return (
              <button
                onClick={() => onCitiesClicked(item)}
                key={item}
                style={{
                  border: " 0.5px black solid",
                  width: "6rem",
                  borderRadius: "5px",
                  backgroundColor: "#006eff",
                  padding: "1rem",
                  margin: "10px",
                  cursor: "pointer"
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="Places">
        <hr size="8" width="90%" color="#790050" />
      </div>

      <ul>
        {Object.values(places).map((place) => {
          return (
            <div className="placeContainer" key={place}>
              <li key={place} style={{ color: "black" }}>
                {place}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
