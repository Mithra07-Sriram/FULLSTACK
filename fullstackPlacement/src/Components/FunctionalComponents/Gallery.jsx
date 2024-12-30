import React from "react";
import { useState } from "react";
const Gallery=()=>{
    var [count,setCount]=useState(0);
   /* function increment()
    {
        setCount(count+1);
    }
        <button onClick={increment}>Increment</button>// use this is function this line
        */
    return(
        <section>

         <h1>This is my Gallery page</h1>
         <h2>
            Learning state concept
         </h2>
         <h3>The state of my variable count is {count}</h3>
         
         <button onMouseOver={()=>{setCount(count-1)}}>Decrement</button>
         
         <button onDoubleClick={()=>{setCount(count+1)}}>Inrement</button>
         
         <button onClick={()=>{setCount(0)}}>Reset</button>
         </section>
    )

}
export default Gallery;
