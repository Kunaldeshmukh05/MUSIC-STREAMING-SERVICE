import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Footer from "./components/MainBar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Profile from "./components/profile";
import Sidebar from "./components/SideBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Footer></Footer>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/NavBar" element={<NavBar />}>
            <Route path="/NavBar/LoginPage" element={<LoginPage />}></Route>
            <Route path="/NavBar/SignUpPage" element={<SignUpPage />}></Route>
            <Route path="/NavBar/profile" element={<Profile />}></Route>
          </Route>
          <Route path="/MainBar"></Route>
          <Route path="/SideBar" element={<Sidebar />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
