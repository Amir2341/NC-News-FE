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

  return (
    <>
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/articles/topic/${topic.slug}`}>
            <button className="topic-btn" value={topic.slug}>
              {topic.slug}
            </button>
          </Link>
        );
      })}
    </>
  );
};

export default Topic;
