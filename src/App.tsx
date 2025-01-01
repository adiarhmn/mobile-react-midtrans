import "@mantine/core/styles.css";
import "./index.css";
import { Button, MantineProvider } from "@mantine/core";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider>
      <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
      <div className="font-bold">{count}</div>
    </MantineProvider>
  );
}

export default App;
