import "./App.css";
import { Title } from "./components/title";
import { Articles } from "./components/articles";
import { Topic } from "./components/Topic";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Title />

        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:topic" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
