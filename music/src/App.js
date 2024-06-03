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
import GlobalSongs from "./components/globalSongs";
import IndiaTopSongs from "./components/IndiaTopSongs";
import MarathiSongs from "./components/MarathiSongs";
import BollywoodPartySongs from "./components/BollywoodPartySongs";
import GlobalPartySongs from "./components/GlobalPartySongs";
import ArtistList from "./components/artist";
import Telgu from "./components/telgu";
import Search from './components/SearchAPI/SearchApi';
import Landingpage from "./components/landingpage";
import CreatePlaylist from "./components/playlist/createPlaylist";
import UploadData from "./components/AddData/UploadData";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>}></Route>
          <Route path="/SideBar/createPlaylist"element={<CreatePlaylist/>}></Route>
          <Route path="/MainBar/telgu" element={<Telgu />}></Route>
          <Route path="/NavBar/SearchApi" element={<Search/>}></Route>
          <Route path="/SideBar/artist" element={<ArtistList />}></Route>
          <Route path="/MainBar/globalSongs" element={<GlobalSongs />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/NavBar" element={<NavBar />}></Route>
          <Route path="/SideBar/UploadData" element={<UploadData/>}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/SignUpPage" element={<SignUpPage />}></Route>
            <Route path="/profile" element={<Profile />}></Route> 
          <Route path="/MainBar"></Route>
          <Route path="/LoginPage/SignUpPage" element={<SignUpPage />}></Route>
          <Route path="/MainBar/top50Hindi" element={<Top50 />}></Route>
          <Route path="/SideBar" element={<Sidebar />}></Route>
          <Route path="/SideBar/Lib" element={<Lib />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
          <Route
            path="/MainBar/GlobalPartySongs"
            element={<GlobalPartySongs />}
          ></Route>

          <Route
            path="/MainBar/BollywoodPartySongs"
            element={<BollywoodPartySongs />}
          ></Route>
          <Route
            path="/MainBar/MarathiSongs"
            element={<MarathiSongs />}
          ></Route>
          <Route path="/MainBar/IndiaTopSongs"
            element={<IndiaTopSongs />}
          ></Route>
          <Route path="/SideBar/LikedSongs" element={<LikedSongs />}></Route>
          <Route path="/SideBar/RecentSongs" element={<RecentSongs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

































