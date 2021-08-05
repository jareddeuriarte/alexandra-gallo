import './App.css';
import Bio from "./components/Bio/index"
import Header from "./components/Header/index"
import Hero from "./components/Hero/index"
import Nav from "./components/Nav/index"
import DM from "./components/DM/index"


function App() {
  return (


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
      <Bio></Bio>
      </div>
      
      <DM></DM>

    </div>
  );
}

export default App;




// import React from "react";
// import "./App.css";
// import Nav from './components/Nav'
// import Home from './pages/Home'
// import Saved from './pages/Saved'
// import Footer from './components/Footer';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// // import SearchResults from "./components/SearchResults";


// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />

//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/saved" component={Saved} />
//         </Switch>
//         <Footer />

//       </div>
//     </Router>
//   );
// }


// export default App;

