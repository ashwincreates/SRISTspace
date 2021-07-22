import './Nav.css';
import Emoji from '../emoji/Emoji';

function Nav() {
  return (
    <>
    <nav>
    <a className="navbar-brand" href="#"><img className="logo" src="https://storage.googleapis.com/ezap-prod/colleges/7918/shri-ram-institute-of-science-and-technology-jabalpur-logo.jpg"/>
    <div className="title">
      <h2>SRIST space</h2>
      <h1>version 1.0</h1>
    </div>
    </a>
    
    <div>
      <input type="checkbox"></input>
      <div></div>
      <div></div>
    </div>

    <ul>
      <li><Emoji symbol="📖" /> Notes</li>
      <li><Emoji symbol="📖" /> Events</li>
      <li><Emoji symbol="📖" /> About Us</li>
    </ul>

    </nav>
    </>
  );
}

export default Nav;
