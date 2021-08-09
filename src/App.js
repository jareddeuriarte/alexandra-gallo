import './App.css';
import Bio from "./components/Bio/index"
import Header from "./components/Header/index"
import Hero from "./components/Hero/index"
import Nav from "./components/Nav/index"
import DM from "./components/DM/index"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (

    <Router>

      <div>
        <Header></Header>
        <Hero></Hero>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id='main'>
        <Nav></Nav>
        <Switch>
          <Route exact path='/' component={Bio} />
          <Route  exact path='/dm' component={DM} />
        </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;

