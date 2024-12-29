import React from "react";

function UnorderedList() {
    const fruits = ["Apple", "Banana", "Cherry", "Orange"];

    return (
        <div>
            <h1>Unordered example Fruits</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default UnorderedList;
