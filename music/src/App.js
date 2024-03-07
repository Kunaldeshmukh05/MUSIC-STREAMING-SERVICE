import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Profile from "./components/profile";
import Sidebar from "./components/SideBar";
import Lib from "./components/Lib";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/NavBar" element={<NavBar />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/SignUpPage" element={<SignUpPage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/MainBar"></Route>
          <Route path="/SideBar" element={<Sidebar />}></Route>
          <Route path="/SideBar/Lib" element={<Lib />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
