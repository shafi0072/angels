import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import { createContext, useState } from 'react';
import AdminArea from './Components/AdminPannel/AdminArea/AdminArea';

export const userContext =  createContext()

function App() {
  const [user, setUser] = useState({
    SearchClick:false
  })
  return (
   <userContext.Provider value={[user, setUser]}>
   <Router>
   <Switch>
     <Route exact path='/'>
       <Home/>
     </Route>
     <Route path='/00Admin432'>
          <AdminArea/>
     </Route>
   </Switch>
</Router>
   </userContext.Provider>
  );
}

export default App;
