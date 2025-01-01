import { useState, useRef, useEffect } from "react";
//{
    /*
const UseRef = () => {
    const [text, setText] = useState("");
    const prevText = useRef("");

    useEffect(() => {
        prevText.current = text;
    }, [text]);

    return (
        <section>
            <h1>This is an example of useRef</h1>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <h2>My current render is: {text}</h2>
            <h3>My previous render is: {prevText.current}</h3>
        </section>
    );
};
//}
*/

function UseRef() {
  const [count, setCount] = useState(0); // State for the current count
  const prevCountRef = useRef(); // Ref to store the previous count

  useEffect(() => {
    prevCountRef.current = count; // Update the previous count after render
  });

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter with Previous Value</h1>
      <p>Current Value: {count}</p>
      <p>Previous Value: {prevCountRef.current || 0}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}




export default UseRef;
