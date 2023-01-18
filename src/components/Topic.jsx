import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

const Topic = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topic) => {
      setTopics(topic.data.topics);
    });
  }, []);

  return (
    <section>
      <div>
        {topics.map((topic) => {
          return (
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              key={topic.slug}
            >
              <Link to={`/articles/topic/${topic.slug}`}>
                <Button className="topic-btn" value={topic.slug}>
                  {topic.slug}
                </Button>
              </Link>
            </ButtonGroup>
          );
        })}
      </div>
    </section>
  );
};

export default Topic;
