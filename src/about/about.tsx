import "./about.css";

function About() {
  return (
    <>
    <div className="about margin-full">
      <div className="aboutpara ">
        <h2 >
          We are students of SRIST Computer Science Stream and We wanted to
          bring our College experience on an online platform .
        </h2>
      </div>
      <h2 className="abouttitle">Contributers</h2>
      <div className="aboutcontainer">
        <div className="aboutcontent">
          <div className="aboutimage ashwin">
          </div>
          <div className="aboutdata">
          <h2>
            <span className="name">Ashwin kumar sharma </span>
            <br></br>

            <span className="role">Role</span>
            <br></br>

            <span className="faculty">Full Stack & UI/UX</span>
          </h2>
          </div>
        </div>
        <div className="aboutcontent">
          <div className="aboutimage ayush">
          </div>
          <div className="aboutdata">
          <h2>
            <span className="name">Ayush nigam</span>
            <br></br>

            <span className="role">Role</span>
            <br></br>

            <span className="faculty">Frontend Development</span>
          </h2>
          </div>
        </div>
        <div className="aboutcontent">
          <div className="aboutimage utkarsh">
          </div>
          <div className="aboutdata">
          <h2>
            <span className="name">Utkarsh choudhary</span>
            <br></br>

            <span className="role">Role</span>
            <br></br>

            <span className="faculty">Frontend & Backend Development</span>
          </h2>
          </div>
        </div>
      
        </div>
      </div>
    
    </>
  );
}
export default About;
