import "./App.css";
import { Title } from "./components/title";
import { Articles } from "./components/articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Title />
        <Routes>
          <Route path="/" element={<Articles />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
