// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login.js';
import Register from './components/register.js';
import Landing from './components/landing.js';



function App() {
  
  return (
    <Router>
      <Switch>
      <Route exact path="/" render={()=><Landing/>}
        />
        <Route exact path="/register" render={()=><Register/>}
        />
        <Route exact path="/login" render={()=><Login/>}
        />
      </Switch>
    </Router>
  
  );
}

export default App;
