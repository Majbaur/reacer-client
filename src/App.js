import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import AddProduct from './Components/Management/AddAnnouncement/AddAnnouncement';
import AllAnnouncement from './Components/User/AllAnnouncement/AllAnnouncement';
import NotFound from './Components/NotFound/NotFound';
import MyProfile from './Components/MyProfile/MyProfile.js';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import AddRules from './Components/Management/AddRules/AddRules';
import AllRules from './Components/User/AllRules/AllRules';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Checkout from './Components/Checkout/Checkout';
import Order from './Components/Order/Order';
import Login from './Components/Loading/Login/Login/Login';
import Register from './Components/Loading/Login/Register/Register';
import Organize from './Components/Organize/Organize.js';
import RequireAuth from './Components/Loading/Login/RequireAuth/RequireAuth';
import MyGame from './Components/MyGame/MyGame';
import BoyShortRace from './Components/OrganizationList/BoyShortRace';
import WomanShortRace from './Components/OrganizationList/WomanShortRace';
import WomanLongRace from './Components/OrganizationList/WomanLongRace';
import BoyLongRace from './Components/OrganizationList/BoyLongRace';
import HillTeackRace from './Components/OrganizationList/HillTeackRace';
import LapWiseRace from './Components/OrganizationList/LapWiseRace';
import Result from './Components/Result/Result';
import BoyLongRaceList from './Components/Result/BoyLongRaceList';
import HillTeackRaceList from './Components/Result/HillTeackRaceList';
import BoyShortRaceList from './Components/Result/BoyShortRaceList';
import LapWiseRaceList from './Components/Result/LapWiseRaceList';
import WomanLongRaceList from './Components/Result/WomanLongRaceList';
import WomanShortRaceList from './Components/Result/WomanShortRaceList';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        {/* <Route path='/signup' element={<SignUp></SignUp>}></Route> */}
        <Route path="/checkout/:addedItemId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/orders" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path="/myGame" element={
          <RequireAuth>
            <MyGame></MyGame>
          </RequireAuth>
        }></Route>
        <Route path='/addAnnouncement' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>}></Route>
        <Route path='/addedItem/:addedItemId' element={
          <RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>
        }></Route>
        <Route path="/allannouncement" element={
          <RequireAuth>
            <AllAnnouncement>
            </AllAnnouncement>
          </RequireAuth>
        }></Route>
        <Route path="/organize" element={
          <RequireAuth>
            <Organize>
            </Organize>
          </RequireAuth>
        }></Route>
        <Route path="/635e936ff84d3ea7d3b0b7a3" element={
          <RequireAuth>
            <BoyLongRaceList></BoyLongRaceList>
          </RequireAuth>
        }></Route>
        <Route path="/635e940af84d3ea7d3b0b7a4" element={
          <RequireAuth>
            <HillTeackRaceList></HillTeackRaceList>
          </RequireAuth>
        }></Route>
        <Route path="/635e924ff84d3ea7d3b0b79f" element={
          <RequireAuth>
            <BoyShortRaceList></BoyShortRaceList>
          </RequireAuth>
        }></Route>
        <Route path="/635e94dcf84d3ea7d3b0b7a5" element={
          <RequireAuth>
            <LapWiseRaceList></LapWiseRaceList>
          </RequireAuth>
        }></Route>
        <Route path="/635e95aaf84d3ea7d3b0b7a8" element={
          <RequireAuth>
            <WomanLongRaceList></WomanLongRaceList>
          </RequireAuth>
        }></Route>
        <Route path="/635e9546f84d3ea7d3b0b7a6" element={
          <RequireAuth>
            <WomanShortRaceList></WomanShortRaceList>
          </RequireAuth>
        }></Route>
        <Route path="/result" element={
          <RequireAuth>
            <Result></Result>
          </RequireAuth>
        }></Route>
        <Route path='/addRules' element={
          <RequireAuth>
            <AddRules></AddRules>
          </RequireAuth>}></Route>
        <Route path='/allRules' element={
          <RequireAuth>
            <AllRules></AllRules>
          </RequireAuth>}></Route>
        <Route path="/myprofile" element={
          <MyProfile></MyProfile>
        }></Route>
        <Route path='/Boy%20Short%20Race' element={<BoyShortRace></BoyShortRace>}></Route>
        <Route path='/Woman%20Short%20Race' element={<WomanShortRace></WomanShortRace>}></Route>
        <Route path='/Woman%20Long%20Race' element={<WomanLongRace></WomanLongRace>}></Route>
        <Route path='/Boy%20Long%20Race' element={<BoyLongRace></BoyLongRace>}></Route>
        <Route path='/Hill%20Track%20Race' element={<HillTeackRace></HillTeackRace>}></Route>
        <Route path='/Lap%20Wise%20Race' element={<LapWiseRace></LapWiseRace>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
