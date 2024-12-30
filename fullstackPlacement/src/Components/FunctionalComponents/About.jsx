import React from "react";
const About=(props)=>{
    return (
        <section>
            <h1>THis is About Page</h1>
            <h2>I am a student @ {props.college} College</h2>
            <h2>othercolleges {props.clg1}</h2>
        </section>
    )

}
export default About;