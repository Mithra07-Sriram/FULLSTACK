import { useContext } from "react";
import { ThemeProvider } from "../UseContext";
var StudentResults=()=>
{
    const result=useContext(ThemeProvider);
    return(
        <section>
            <h3>Your  SGPA result is {result.sgpa} and CGPA result is {result.cgpa} </h3>
        </section>
    );
}
export default StudentResults;