import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const postList = useSelector((state) => state.posts.value);
  console.log(postList);
  return (
    <div className="App">
      <div>
        <h1>React-Redux-Forum</h1>
      </div>
      <div>
        <div className="addPost">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Post Contents"></input>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
}

export default App;
