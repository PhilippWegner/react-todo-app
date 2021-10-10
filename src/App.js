import "./App.css";
import { useState } from "react";
import Todo from "./Screens/Todo";
import Navbar from "./Components/Navbar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <div className="HeaderContainer">
        <Navbar onSearchQuery={(e) => setSearchQuery(e.target.value)} />
      </div>

      <div className="MainContainer">
        <Todo searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default App;
