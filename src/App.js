import "./App.css";
import { Title } from "./components/title";
import { Articles } from "./components/articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleArticle } from "./components/singleArticle";
import { useState } from "react";
import { PostComment } from "./components/postcomment";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  const [isLoading, setIsLoading] = useState(true);
  return (
    <BrowserRouter>
      <div>
        <Title />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:topic" element={<Articles />} />
          <Route
            path="/articles/:article_id"
            element={
              <SingleArticle
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route
            path="articles/:article_id/comments"
            element={<PostComment />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
