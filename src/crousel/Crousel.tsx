import "./Crousel.css";

function Crousel() {
    return(
        <>
        <div className="showslider middle">
        <div className="slides">
       
<input type="radio" name="a" id="a1" checked/>
<input type="radio" name="a" id="a2" checked />
<input type="radio" name="a" id="a3" checked />

        <div className="slide s1">
      <img src="https://educationworld4u.com/images/college/1975992703-shri-ram-institute-of-technology-jabalpur-city-jabalpur-colleges-tthlike.jpg" className="d-block w-100" width="1200px" height="500px" alt="..."/>
      </div>
        <div className="slide">
   <img src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100"  width="1200" height="500" alt="..."/>
      </div>
        <div className="slide">
      <img src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" width="1200" height="500" className="d-block w-100" alt="..."/>
      </div>
        </div>
         
        <div className="navigation">
        <label htmlFor="a1" className="bar"></label>
        <label htmlFor="a2" className="bar"></label>
        <label htmlFor="a3" className="bar"></label>
        </div>
        </div>
      </> 
        );
    }
    export default Crousel;
