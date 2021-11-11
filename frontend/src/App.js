// import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login.js';
import Register from './components/register.js';
function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/register" render={()=><Register/>}
        />
        <Route exact path="/" render={()=><Login/>}
        />
      </Switch>
    </Router>
  
  );
}

export default App;
