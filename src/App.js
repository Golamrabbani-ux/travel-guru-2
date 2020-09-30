import React, { createContext, useState } from 'react';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import fakeData from './fakedata/fakeData';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



export const AllPlaceDataContext = createContext();
export const LoggeInuserContext = createContext();

function App() {
  const [placeData, setPlaceData] = useState(fakeData[0]);
  const [loggedInUser, setLoggedInUser] = useState('');

  return (
    <LoggeInuserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <AllPlaceDataContext.Provider value={[placeData, setPlaceData]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/booking'>
            <Booking/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <PrivateRoute path='/destination'>
            <Destination/>
          </PrivateRoute>

          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </AllPlaceDataContext.Provider>
    </LoggeInuserContext.Provider>
  );
}

export default App;

