import "./App.css";
import { Title } from "./components/title";
import { Articles } from "./components/articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleArticle } from "./components/singleArticle";
import { useState } from "react";
import { PostComment } from "./components/postcomment";
import { NotFound } from "./components/notfound";
import { UserContext } from "./context/usercontext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    username: "tickle122",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Title />
          <Routes>
            <Route
              path="/"
              element={
                <Articles isLoading={isLoading} setIsLoading={setIsLoading} />
              }
            />
            <Route
              path="/articles/topic/:topic"
              element={
                <Articles isLoading={isLoading} setIsLoading={setIsLoading} />
              }
            />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
