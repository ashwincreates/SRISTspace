import './nav.css';
import { NavLink } from "react-router-dom";
import Searchcard from '../searchbar/Searchcard';
function Nav() {
  return (
    <>
    <nav>
    <NavLink className="navbar-brand" to="/"><img className="logo" src="https://storage.googleapis.com/ezap-prod/colleges/7918/shri-ram-institute-of-science-and-technology-jabalpur-logo.jpg" alt="website logo"/>
    <div className="title">
      <h2>SRIST space</h2>
      <h1>version 1.0</h1>
    </div>
    </NavLink>
   <div className="nav-tray"> 
      <Searchcard></Searchcard>
    <div className="nav-menu-btn"  onClick= {() => opennav()}>
      <input className="nav-menu" id="nav-btn" type="checkbox"></input>
      <div className="first"></div>
      <div className="second"></div>
    </div>

    <ul id="overlay">
      <li><NavLink onClick= {() => linkClick()} className="links" activeClassName="active_class" to="/notes">Notes</NavLink></li>
      <li><NavLink onClick= {() => linkClick()} className="links" activeClassName="active_class" to="/events">Events</NavLink></li>
      <li><NavLink onClick= {() => linkClick()} className="links" activeClassName="active_class" to="/articles">Articles</NavLink></li>
      <li><NavLink onClick= {() => linkClick()} className="links" activeClassName="active_class" to="/about">About Us</NavLink></li>
    </ul>
</div>
    </nav>
    </>
  );
}


function opennav(){
    let box = document.getElementById("nav-btn") as HTMLInputElement;
    if(box?.checked)
    {
        document.getElementById("overlay")?.classList.add("active");
        const root = document.getElementById("root")?.style;
        if(root)
            root.overflow = "hidden"
    }
    else
    {
        document.getElementById("overlay")?.classList.remove("active");
        const root = document.getElementById("root")?.style;
        if(root)
            root.overflow = "scroll"
    }
}

function linkClick(){
  let box = document.getElementById("nav-btn") as HTMLInputElement;
  box.checked = false;
  opennav(); 
}

export default Nav;
