import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './nav/nav';
import App from './App';
import Note from './notes/notes';
import About from './about/about';
import Event from './events/event';
import Search from './search/search';
import Login from './login/login';
import Explore from './articles/explore';
import ReadArticle from './articles/readarticle';
import AddArticle from './articles/addarticle';
import addevent from './events/addevent';


  
ReactDOM.render(
  

  <BrowserRouter>
       <Login/>
      <Nav></Nav>
	<Switch>
        <Route exact path='/' component={ App } />
        <Route exact path='/notes' component={ Note } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/articles' component={ Explore } />
        <Route exact path='/articles/addarticle' component={ AddArticle } />
        <Route exact path='/articles/readarticle' component={ ReadArticle } />
        <Route exact path='/events' component={ Event } />
          <Route exact path='/events/addevent' component={ addevent } />
	<Route exact path='/search' component={ Search } />
	</Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
