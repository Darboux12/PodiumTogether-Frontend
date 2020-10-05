import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./components/main/MainPage"
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
import PrivateRoute from "./components/security/PrivateRouter";
import EventDetailsPage from "./components/event-details/page/EventDetailsPage";
import EditProfilePage from "./components/edit-profile/EditProfilePage";
import PlaceDetailsPage from "./components/place-details/page/PlaceDetailsPage";
import AdminPanel from "./components/admin/AdminPanel";
import AddNews from "./components/admin/AddNews";
import EmptyFooter from "./components/footer/EmptyFooter";
import TestComponent from "./components/TestComponent";
import AddSubject from "./components/admin/AddSubject";

class App extends React.Component {

  render() {
    return (

        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/home" exact component={MainPage}/>
            <Route path="/event/create" exact component={CreateEventPage}/>
            <Route path="/event/display" exact component={DisplayEventsPage}/>
            <Route path="/new/password" exact component={ForgotPasswordPage}/>
            <Route path="/terms" exact component={TermsPage}/>
            <Route path="/user/profile" exact component={UserProfilePage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/contact" exact component={ContactPage}/>
            <Route path="/news" exact component={NewsPage}/>
            <Route path="/place/create" exact component={TagPlacePage}/>
            <Route path="/place/display" exact component={DisplayPlacesPage}/>
            <Route path="/event/details" exact component={EventDetailsPage}/>
            <Route path="/user/profile/edit" exact component={EditProfilePage}/>
            <Route path="/place/details" exact component={PlaceDetailsPage}/>
            <Route path="/admin/panel" exact component={AdminPanel}/>
            <Route path="/news/create" exact component={AddNews}/>
            <Route path="/subject/add" exact component={AddSubject}/>
            <Route path="/test" exact component={TestComponent}/>
            <PrivateRoute path={"/dashboard"} component={CreateEventPage}/>
          </Switch>
            <EmptyFooter/>
        </Router>

    );
  }

}



export default App;
