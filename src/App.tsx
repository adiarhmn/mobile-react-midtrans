import "@mantine/core/styles.css";
import "./index.css";
import { Button, Container, MantineProvider } from "@mantine/core";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider>
      <Container>
        <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
        <div className="font-bold text-blue-500">{count}</div>
      </Container>
    </MantineProvider>
  );
}

export default App;
