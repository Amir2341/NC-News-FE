import "./App.css";
import { Title } from "./components/title";
import { Articles } from "./components/articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Title />
        <Routes>
          <Route
            path="/"
            element={<Articles articles={articles} setArticles={setArticles} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
