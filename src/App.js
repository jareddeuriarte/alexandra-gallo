import './App.css';
import Bio from "./components/Bio/index"
import Header from "./components/Header/index"
import Hero from "./components/Hero/index"
import Nav from "./components/Nav/index"
import DM from "./components/DM/index"
import Photo from "./components/Photo/index"



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
        {/* <Hero></Hero> */}

        <div className='main'>

          <div id='nav-wrapper'>
            <Nav></Nav>
          </div>

          <Switch>
          <div className='content-wrapper'>

            <Route exact path='/' component={Bio} />
            <Route exact path='/dm' component={DM} />
            <Route exact path='/photo' component={Photo} />
            </div>

          </Switch>

        
        </div>

      </div>
    </Router>
  );
}

export default App;

