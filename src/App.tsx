// import logo from './logo.svg';
// import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import './index.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="col-12 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src="https://storage.googleapis.com/ezap-prod/colleges/7918/shri-ram-institute-of-science-and-technology-jabalpur-logo.jpg"/>SRISTspace</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link " aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Notes
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Technology</a></li>
            <li><a className="dropdown-item" href="#">web development</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">support</a></li>
            <li><a className="dropdown-item" href="#">feedback</a></li>
          </ul>
        </li>
      <li className="nav-item active">
          <a className="nav-link " aria-current="page" href="contact.html">Contact</a>
        </li>
        
      </ul> 
    </div>
  </div>
</nav>
</div>
 <div id="carouselExampleCaptions" className="carousel slide carousel-fade col-11 mx-auto" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item  active">
      <img src="https://educationworld4u.com/images/college/1975992703-shri-ram-institute-of-technology-jabalpur-city-jabalpur-colleges-tthlike.jpg" className="d-block w-100" width="1200px" height="500px" alt="..."/>
     </div>
<div className="carousel-item ">
      <img src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100"  width="1200" height="500" alt="..."/>
     </div>
    <div className="carousel-item ">
      <img src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" width="1200" height="500" className="d-block w-100" alt="..."/>
    </div> 
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>   
 </header>
 <div className="container  d-flex " >
<div className="col-md-6 ">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">World</strong>
          <h3 className="mb-0">iCoder offices</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
       <img src="https://source.unsplash.com/200x250/?glass,gogle,code" className="bd-placeholder-img" width="200" height="250" alt="..."/>

        </div>
      </div>
    </div>
<div className="col-md-6 ">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">World</strong>
          <h3 className="mb-0">iCoder offices</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
       <img src="https://source.unsplash.com/200x250/?tech,earphones,code" className="bd-placeholder-img" width="200" height="250" alt="..."/>
        </div>
      </div>
    </div>
</div>
<footer className="container">
    <p className="float-end"><a href="#">Back to top</a></p>
    <p>© 2020–2021 iCoder, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
  </footer>


    </div>
  );
}

export default App;
