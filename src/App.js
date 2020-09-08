import React from 'react';

import Logo from "./components/common/Logo";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./components/main/MainPage"
import MainPageCarousel from "./components/main/MainPageCarousel";

import CarouselYes from "./components/main/MainPageCarousel";

import NavBar from "./components/navbar/navbars/NavBar"
import Footer from "./components/footer/Footer";
import CreateEventPage from "./components/create-event/CreateEventPage";
import DisplayEventsPage from "./components/display-events/page/DisplayEventsPage";
import ForgotPasswordPage from "./components/forgot-password/ForgotPasswordPage";
import TermsPage from "./components/terms/TermsPage";
import UserProfilePage from "./components/user-profile/UserProfilePage";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import NewsPage from "./components/news/NewsPage";
import TagPlacePage from "./components/tag-place/TagPlacePage";
import DisplayPlacesPage from "./components/display-places/page/DisplayPlacesPage";

class App extends React.Component {

  render() {
    return (

        <Router>
          <NavBar userLogged={true}/>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/home" exact component={MainPage}/>
            <Route path="/event/create" exact component={CreateEventPage}/>
            <Route path="/event/display" exact component={DisplayEventsPage}/>
            <Route path="/new/password" exact component={ForgotPasswordPage}/>
            <Route path="/terms" exact component={TermsPage}/>
            <Route path="/userProfile" exact component={UserProfilePage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/contact" exact component={ContactPage}/>
            <Route path="/news" exact component={NewsPage}/>
            <Route path="/places/create" exact component={TagPlacePage}/>
            <Route path="/places/display" exact component={DisplayPlacesPage}/>
          </Switch>
            <Footer/>
        </Router>

    );
  }


}



export default App;
