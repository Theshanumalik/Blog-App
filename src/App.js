import TopBar from "./components/topbar/TopBar";
import EditProfile from "./pages/editProfile/EditProfile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/" element={<Home />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route
            path="/edit/:user_id"
            element={user ? <EditProfile /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
