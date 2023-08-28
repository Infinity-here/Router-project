import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authorpage from "./components/authoresperdonal";
import Home from "./components/home";
import LoginPage from "./components/login/loginpage";
import Fav from "./components/favourite";
import Protected from "./components/login/protected";
import { Newstate } from "./components/context/context";
import Authors from "./components/authors";

function App() {
  return (
    <div className="App">
      <Newstate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/fav" element={<Protected Component={Fav} />} />
          <Route path="/author" element={<Authorpage />} />
          <Route path="/authordetail/:id" element={<Authors />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Newstate>
    </div>
  );
}

export default App;
