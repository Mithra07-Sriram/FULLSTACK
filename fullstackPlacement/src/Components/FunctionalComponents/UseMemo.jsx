import { useState, useMemo } from "react";

const slowFunction = (number) => {
  console.log("Running slowFunction...");
  for (let i = 0; i < 100000000; i++) {} // Reduced loop count for performance
  return number * 2;
};

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState(true);

  const darkLight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  const doubledNumber = useMemo(() => slowFunction(num), [num]);

  return (
    <section >
      <h1>This is a memo</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
      <h2 style={darkLight}>{doubledNumber}</h2>
    </section>
  );
};

export default UseMemo;
