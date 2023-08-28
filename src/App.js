import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authorpage from "./components/authordetail";
import Home from "./components/home";
import LoginPage from "./components/login/loginpage";
import Fav from "./components/favourite";
import Protected from "./components/login/protected";
import { Newstate } from "./components/context/context";
import Authors from "./components/authors";
import { createContext, useState } from "react";
export const context = createContext();
function App() {
  const [fav, setfav] = useState([]);
  return (
    <div className="App">
      <Newstate>
        <context.Provider value={{ fav, setfav }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Home />} />
            <Route path="/fav" element={<Protected Component={Fav} />} />
            <Route path="/author" element={<Authorpage />}>
              <Route path="/author/:id" element={<Authors />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </context.Provider>
      </Newstate>
    </div>
  );
}

export default App;
