import './Nav.css';
import Emoji from '../emoji/Emoji';
import { NavLink } from "react-router-dom";
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
    
    <div className="nav-menu-btn"  onClick= {() => opennav()}>
      <input className="nav-menu" id="nav-btn" type="checkbox"></input>
      <div className="first"></div>
      <div className="second"></div>
    </div>

    <ul id="overlay">
      <li><NavLink activeClassName="active_class" to="/noteList"><Emoji symbol="📖" /> Notes</NavLink></li>
      <li><NavLink activeClassName="active_class" to="/Event"><Emoji symbol="📖" /> Events</NavLink></li>
      <li><NavLink activeClassName="active_class" to="/About"><Emoji symbol="📖" /> About Us</NavLink></li>
    </ul>

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

export default Nav;
