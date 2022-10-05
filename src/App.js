import React from "react";
import "./styles.css";
import { useState } from "react";
const state = {
  mumbai: [
    { name: "marine line", rating: "4/5" },
    { name: "gate way of india", rating: "4.5/5" },
    { name: "bandstand", rating: "3.5/5" },
    { name: "siddhivinayak mandir", rating: "5/5" }
  ],
  kolkata: [
    {
      name: "Eco park",
      rating: "5/5"
    },
    {
      name: "park street",
      rating: "4.5/5"
    },
    {
      name: "Howrah Bridge",
      rating: "3/5"
    }
  ],
  delhi: [
    {
      name: "akshardham",
      rating: "3.5/5"
    },
    {
      name: "India gate",
      rating: "3/5"
    },
    {
      name: "Iskon temple",
      rating: "5/5"
    },
    {
      name: "Red fort",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> travel place </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite travel place. Select a place to know about that
        city{" "}
      </p>

      <div>
        {Object.keys(state).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {state[selectedGenre].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {place.name} </div>
              <div style={{ fontSize: "smaller" }}> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
