import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Profile from "./components/profile";
import LikedSongs from "./components/LikedSongs";
import Sidebar from "./components/SideBar";
import Lib from "./components/Lib";
import Top50 from "./components/top50Hindi";
import RecentSongs from "./components/RecentSongs";

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
          <Route path="/LoginPage/SignUpPage" element={<SignUpPage />}></Route>
          <Route path="/MainBar/top50Hindi" element={<Top50 />}></Route>
          <Route path="/SideBar" element={<Sidebar />}></Route>
          <Route path="/SideBar/Lib" element={<Lib />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
          <Route path="/SideBar/LikedSongs" element={<LikedSongs />}></Route>
          <Route path="/SideBar/RecentSongs" element={<RecentSongs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
