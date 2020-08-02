import React from 'react';

import Logo from "./components/Logo";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./components/MainPage"
import MainPageCarousel from "./components/MainPageCarousel";

import CarouselYes from "./components/MainPageCarousel";

import NavBar from "./components/NavBar"

class App extends React.Component {

  render() {
    return (

        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={MainPage}/>
          </Switch>
        </Router>

    );
  }


}



export default App;
