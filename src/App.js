import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import { Provider } from './components/context';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import PageNotFound from './components/pages/PageNotFound';
import './App.css';


class App extends Component {
  render() {
  


    return (
     <Provider>
       <Router>
        <div className="App">
          <Navbar title="Contacts list"/>
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
            <Route exact path="/about/:id/:name" component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        </Router>
    </Provider>
     
    );
  }
}

export default App;
