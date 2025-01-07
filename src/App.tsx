import "@mantine/core/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./features/Home";
import ResetPassword from "./features/ResetPassword";
// import { CreateTransaction } from "./features/CreateTransaction";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
        </Router>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
