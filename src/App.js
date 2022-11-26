import {HashRouter, Routes, Route} from "react-router-dom"
import Fixture from "./components/fixture/Fixture.jsx";
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import Logout from "./components/logout/Logout.js";
import Navigation from "./components/navBar/Navigation.jsx";
import Predictions from "./components/predictions/Predictions.jsx";
import Profile from "./components/profile/Profile.jsx";
import Ranking from "./components/ranking/ranking.jsx";
import Register from "./components/register/Register";
import PrivateRoute from "./components/routes/PrivateRoute.js";
import PublicRoute from "./components/routes/PublicRoute.js";
import { FIXTURE, HOME, LOGIN, LOGOUT, PREDICTIONS, PRIVATE, PROFILE, PUBLIC, RANKING, REGISTER } from "./config/routes/paths";
import AuthContextProvider from "./contexts/authContext.js";

function App() {
  return (
    <>
        <AuthContextProvider>
            <HashRouter>
                <Routes>
                    <Route path={ HOME } element={<Navigation/>}>
                        <Route index element={<Home/>}/> 
                        <Route path={ FIXTURE } element={<Fixture/>} />
                        <Route path={ RANKING } element={<Ranking/>} />
                        <Route path={ PUBLIC } element={<PublicRoute/>}>
                            <Route path={ LOGIN } element={<Login/>} />
                            <Route path={ REGISTER } element={<Register/>} />
                        </Route>
                        <Route path={ PRIVATE} element={<PrivateRoute/>}>
                            <Route path={ PREDICTIONS } element={<Predictions/>} />
                            <Route path={ PROFILE } element={<Profile/>} />
                            <Route path={ LOGOUT } element={<Logout/>} />
                        </Route>    
                    </Route>
                </Routes>
            </HashRouter>
        </AuthContextProvider>
    </>
  );
}

export default App;
