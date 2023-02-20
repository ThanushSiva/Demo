import "./App.css";
import axios from "axios";

function App() {
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/login", {
        email: "thanush@gmail.com",
      }, {
        withCredentials: true
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;