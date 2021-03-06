import './App.css';
import Bio from "./components/Bio/index"
import Header from "./components/Header/index"
// import Hero from "./components/Hero/index"
import Nav from "./components/Nav/index"
import DM from "./components/DM/index"
import Photo from "./components/Photo/index"
import Social from "./components/Social/index"
import Footer from "./components/Footer/index"




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
            <Route exact path='/social' component={Social} />

            </div>

          </Switch>

        
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Footer></Footer>



      </div>
    </Router>
  );
}

export default App;

