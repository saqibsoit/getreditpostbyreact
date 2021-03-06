import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import App from "./App";

function Reddit() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      const newPosts = res.data.data.children.map((obj) => obj.data);
      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <h1> Reddid Post Saqib </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title}</li>
        ))}
      </ul>
    </div>
  );
}
ReactDOM.render(<Reddit />, document.getElementById("root"));
