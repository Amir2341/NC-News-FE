import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";

const Topic = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topic) => {
      setTopics(topic.data.topics);
    });
  }, []);
  console.log(topics);
  return (
    <>
      <Link to="/">
        <button>home</button>
      </Link>
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/${topic.slug}`}>
            <button value={topic.slug}>{topic.slug}</button>
          </Link>
        );
      })}
    </>
  );
};

export default Topic;
