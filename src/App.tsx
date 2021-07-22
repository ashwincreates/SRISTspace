import './App.css';
import Nav from './nav/Nav';
import Crousel from './crousel/Crousel';

function App() {
  return (
    <div className="App">
    <Nav></Nav> 
    <Crousel></Crousel>

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
