import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./components/main/MainPage"
import NavBar from "./components/navbar/navbars/NavBar"
import CreateEventPage from "./components/create-event/CreateEventPage";
import DisplayEventsPage from "./components/display-events/page/DisplayEventsPage";
import ForgotPasswordPage from "./components/forgot-password/ForgotPasswordPage";
import TermsPage from "./components/terms/TermsPage";
import UserProfilePage from "./components/user-profile/UserProfilePage";
import AboutPage from "./components/about/page/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import NewsPage from "./components/news/NewsPage";
import TagPlacePage from "./components/tag-place/TagPlacePage";
import DisplayPlacesPage from "./components/display-places/page/DisplayPlacesPage";
import PrivateRoute from "./components/security/PrivateRoute";
import EventDetailsPage from "./components/event-details/page/EventDetailsPage";
import EditProfilePage from "./components/edit-profile/EditProfilePage";
import AdminPanel from "./components/admin/page/AdminPanel";
import AddNews from "./components/admin/add/AddNews";
import EmptyFooter from "./components/footer/EmptyFooter";
import AddSubject from "./components/admin/add/AddSubject";
import AddDiscipline from "./components/admin/add/AddDiscipline";
import NewsDetails from "./components/news/NewsDetails";
import PlaceDetailsPageWeb from "./components/place-details/page/PlaceDetailsPageWeb";
import AdminRoute from "./components/security/AdminRoute";

function App() {

    return (

        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/home" exact component={MainPage}/>
            <PrivateRoute path="/event/create" exact component={CreateEventPage}/>
            <PrivateRoute path="/event/display" exact component={DisplayEventsPage}/>
            <Route path="/new/password" exact component={ForgotPasswordPage}/>
            <Route path="/terms" exact component={TermsPage}/>
            <Route path="/user/profile" exact component={UserProfilePage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/contact" exact component={ContactPage}/>
            <Route path="/news" exact component={NewsPage}/>
            <Route path="/news/details/:id" exact component={NewsDetails}/>
            <Route path="/place/create" exact component={TagPlacePage}/>
            <PrivateRoute path="/place/display" exact component={DisplayPlacesPage}/>
            <Route path="/event/details" exact component={EventDetailsPage}/>
            <Route path="/user/profile/edit" exact component={EditProfilePage}/>
            <Route path="/place/details/:id" exact component={PlaceDetailsPageWeb}/>
            <AdminRoute path="/admin/panel" exact component={AdminPanel}/>
            <Route path="/news/create" exact component={AddNews}/>
            <Route path="/subject/add" exact component={AddSubject}/>
            <Route path="/discipline/add" exact component={AddDiscipline}/>
            <PrivateRoute path={"/dashboard"} component={CreateEventPage}/>
          </Switch>
            <EmptyFooter/>
        </Router>

    );



}



export default App;
