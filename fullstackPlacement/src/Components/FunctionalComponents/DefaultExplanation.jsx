import React from "react";

function DefaultExplanation() {
    return (
        <div>
            <h2>What is default in JavaScript (and React)?</h2>
            <p>
                In JavaScript, the default keyword is used to export a single value or 
                component from a module. A default export allows importing the module 
                without using curly braces {`{ }`} and lets you name the imported entity 
                anything you like.
            </p>

            <h2>Why use default for exporting a component in React?</h2>
            <p>
                React components are often exported as default when they are the primary or only 
                export from a file. It simplifies the import process and makes the code more readable, 
                especially in cases where a module contains only one component.
            </p>

            <h2>Advantages of Default Exports</h2>
            <ul>
                <li><b>Simplifies Syntax:</b> Default exports don't require curly braces during import.</li>
                <li><b>Flexible Naming:</b> You can rename the import while importing it.</li>
                <li><b>Better for Single Exports:</b> It's ideal when the file contains only one component.</li>
            </ul>
        </div>
    );
}

export default DefaultExplanation;
