import React from "react";
import "./DogDetails.css";

const DogDetails = ({ name, facts }) => {
    return (
        <div>
            <h1>I'm {name}</h1>
            <h3>Here are my facts</h3>
            <ul>
                {/* accessing the index for the key is really inefficient but the only way to logically implement this given the nature of the application */}
                {facts.map((fact, indx) => (
                    <li key={indx}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default DogDetails;
