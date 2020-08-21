import React from 'react';

import Logo from "./components/common-components/Logo";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./components/mainpage-components/MainPage"
import MainPageCarousel from "./components/mainpage-components/MainPageCarousel";

import CarouselYes from "./components/mainpage-components/MainPageCarousel";

import NavBar from "./components/navbar-components/NavBar"
import Footer from "./components/footer-components/Footer";
import CreateEventPage from "./components/create-event-components/CreateEventPage";
import DisplayEventsPage from "./components/display-events-page-components/DisplayEventsPage";

class App extends React.Component {

  render() {
    return (

        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/home" exact component={MainPage}/>
            <Route path="/createEvent" exact component={CreateEventPage}/>
            <Route path="/displayEvents" exact component={DisplayEventsPage}/>
          </Switch>
            <Footer/>
        </Router>

    );
  }


}



export default App;
