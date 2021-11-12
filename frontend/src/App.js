// import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Landing from './components/Landing.js';
import RegisterSecondpage from './components/RegisterSecondpage.js';


function App() {
  
  return (
    <Router>
      <Switch>
      <Route exact path="/" render={()=><Landing/>}
        />
        <Route exact path="/register" render={()=><Register/>}
        />
        <Route exact path="/registersecondpage" render={()=><RegisterSecondpage/>}
        />
        <Route exact path="/login" render={()=><Login/>}
        />
      </Switch>
    </Router>
  
  );
}

export default App;
