import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-star-rating/dist/css/react-star-rating.min.css';

import "react-image-gallery/styles/css/image-gallery.css";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer, {getEndpointsDispatch} from "./components/reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(

    <Provider store={store}><App /></Provider>, document.getElementById('root')
);
