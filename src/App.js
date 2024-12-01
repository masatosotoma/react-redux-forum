import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "./features/Posts";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const postList = useSelector((state) => state.posts.value);
  console.log(postList);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addPost({
        id: postList.length,
        name: name,
        content: content,
      })
    );

    setName("");
    setContent("");
  };

  return (
    <div className="App">
      <div>
        <h1>React-Redux-Forum</h1>
      </div>
      <div>
        <div className="addPost">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <input
            type="text"
            placeholder="Post Contents"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></input>
          <button onClick={() => handleClick()}>Post</button>
          <hr />
        </div>
        <div className="displayPosts">
          {postList.map((post) => (
            <div key={post.id} className="post">
              <h1>{post.name}</h1>
              <h1 className="postContent">{post.content}</h1>
              <button>Delete post</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
