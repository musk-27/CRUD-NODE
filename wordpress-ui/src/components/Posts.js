import React, { useEffect } from "react";

function Posts() {
  useEffect(() => {
    fetch("http://localhost:3000/post")
      .then((res) => res.json)
      .then((data) => console.log(data));
  }, []);

  return <div>Posts</div>;
}

export default Posts;
