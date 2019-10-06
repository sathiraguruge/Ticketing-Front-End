import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import NavBar from './component/tab/NavBar';
import LoginPage from './component/login/login';
import Footer from './component/tab/Footer';

import ManagerHome from './component/manager/Home';
import ManageInspectors from './component/manager/ManageInspectors';
import ManagePassengers from "./component/manager/ManagePassengers";
import ManageAdmins from './component/manager/ManageAdmins';
import ManageJourneys from "./component/manager/ManageJourneys";
import AddManager from './component/manager/AddManager';
import AddInspector from './component/manager/AddInspector';
import AddPassenger from "./component/manager/AddPassenger";
import AddRoute from "./component/manager/AddRoute";
import AddJourney from "./component/manager/AddJourney";
import TopUp from './component/manager/TopUp'
import RecoverTravelCard from "./component/manager/RecoverTravelCard";
import ManageRoutes from "./component/manager/ManageRoutes";

import InspectorHome from "./component/inspector/Home";

import PassengerHome from "./component/passenger/Home";
import PassengerProfile from "./component/passenger/Profile";
import PassengerAccount from "./component/passenger/Account";
import AddPassengerCard from "./component/passenger/AddCard";
import PassengerTopUp from "./component/passenger/TopUp";
import ViewRoutes from "./component/passenger/ViewRoutes";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>

            <Route exact path="/" component={LoginPage} />
            <Route exact path="/managerHome" component={ManagerHome} />
            <Route exact path="/manageInspectors" component={ManageInspectors} />
            <Route exact path="/managePassengers" component={ManagePassengers} />
            <Route exact path="/manageAdmins" component={ManageAdmins} />
            <Route exact path="/manageRoutes" component={ManageRoutes} />
            <Route exact path="/manageJourneys" component={ManageJourneys} />
            <Route exact path="/addManager" component={AddManager} />
            <Route exact path="/addInspector" component={AddInspector} />
            <Route exact path="/addPassenger" component={AddPassenger} />
            <Route exact path="/addRoute" component={AddRoute} />
            <Route exact path="/addJourney" component={AddJourney} />

            <Route exact path="/topUpPassenger" component={TopUp} />
            <Route exact path="/recoverCard" component={RecoverTravelCard} />

            <Route exact path="/inspectorHome" component={InspectorHome} />

            <Route exact path="/passengerHome" component={PassengerHome} />
            <Route exact path="/passengerProfile" component={PassengerProfile} />
            <Route exact path="/passengerAccount" component={PassengerAccount} />
            <Route exact path="/addPassengerCard" component={AddPassengerCard} />
            <Route exact path="/passengerTopUp" component={PassengerTopUp} />
            <Route exact path="/passengerRoutes" component={ViewRoutes} />

            <Footer/>
          </div>
        </Router>
    );
  }
}

export default App;
