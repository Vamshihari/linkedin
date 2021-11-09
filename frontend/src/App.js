// import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login.js';
import Register from './components/register.js';
function App() {
  const PageRender=(Page)=>{
    return <Page/>
  }
  return (
    <>
   
    <Router>
      <Switch>
        <Route exact path="/register" render={()=>PageRender(Register)}/>
        <Route exact path="/login" render={()=>PageRender(Login)}/>
       
      </Switch>
    </Router>
    </>
  );
}

export default App;
