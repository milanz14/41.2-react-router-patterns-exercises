import React from "react";
import { Link } from "react-router-dom";
import DogDetails from "./DogDetails";

const defaultProps = {
    dogs: [
        {
            name: "Whiskey",
            age: 5,
            // src: whiskey,
            facts: [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!",
            ],
        },
        {
            name: "Duke",
            age: 3,
            // src: duke,
            facts: [
                "Duke believes that ball is life.",
                "Duke likes snow.",
                "Duke enjoys pawing other dogs.",
            ],
        },
        {
            name: "Perry",
            age: 4,
            // src: perry,
            facts: [
                "Perry loves all humans.",
                "Perry demolishes all snacks.",
                "Perry hates the rain.",
            ],
        },
        {
            name: "Tubby",
            age: 4,
            // src: tubby,
            facts: [
                "Tubby is really stupid.",
                "Tubby does not like walks.",
                "Angelina used to hate Tubby, but claims not to anymore.",
            ],
        },
    ],
};

const DogsList = (props) => {
    return (
        <div>
            <h1>
                <b>
                    <u>All Dogs</u>
                </b>
            </h1>
            {defaultProps.dogs.map((dog) => (
                <DogDetails
                    key={dog.name}
                    name={dog.name}
                    age={dog.age}
                    facts={dog.facts}
                />
            ))}
        </div>
    );
};

export default DogsList;
