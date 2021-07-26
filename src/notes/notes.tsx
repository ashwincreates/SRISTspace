import './note.css';
function Notes() {
  return (
    <>
       <div className="card notes">
        <h2> Notes </h2>
<input className="searchbar" name="search" type="text" placeholder="search here"/>
        <br/>
        <div className="content">
        <h5 >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
        </div>
      <br/>
      <br/>
      <button className="explore">Explore &#62;</button>
      </div> 
      <div className="selection">
      <h2 className="subject">Subjects</h2>
      <br/>
      <form>
     <select  className="choice" name="semester" >
     <option selected disabled>Choose your Semester</option>
     <option value="">First</option>
     <option value="">Second</option>
     <option value="">Third</option>
     <option value="">Fourth</option>
     <option value="">Fifth</option>
     <option value="">Sixth</option>
     </select>
     <select className="choice" name="my stream" >
     <option  selected disabled >Choose your stream</option>
     <option value="cs">CS</option>
     <option value="ce">CE</option>
     <option value="ec">EC</option>
     <option value="ee">EE</option>
     <option value="it">IT</option>
     </select>
</form>
<br/>
<div className="tray list">
            <div className="note-card grid">
              <div>
                <h3>Card 1</h3>
                <span>Some text<br/></span>
              </div>
            </div>
            <div className="note-card grid">
              <div>
                <h3>Card 3</h3>
                <span>Some text<br/></span>
              </div>
            </div>
            <div className="note-card grid">
              <div>
                <h3>Card 3</h3>
                <span>Some text<br/></span>
             </div>
             </div>
             <div className="note-card grid">
               <div>
               <h3>Card 4</h3>
               <span>Some text<br/></span>
             </div>
          </div>
             <div className="note-card grid">
               <div>
               <h3>Card 6</h3>
               <span>Some text<br/></span>
             </div>
          </div>
             <div className="note-card grid">
               <div>
               <h3>Card 5</h3>
               <span>Some text<br/></span>
             </div>
          </div>
        </div>
      </div>
              <div className="head">
          <div className="section-title">
            <h2>Newly Uploaded Notes</h2>
            <h1>Fresh upload</h1>
          </div>
          <button className="explore">Explore &#62;</button>
        </div>
        <div className="tray">
            <div className="note-card">
              <div>
                <h3>Card 1</h3>
                <span>Some text<br/></span>
              </div>
            </div>
            <div className="note-card">
              <div>
                <h3>Card 3</h3>
                <span>Some text<br/></span>
              </div>
            </div>
            <div className="note-card">
              <div>
                <h3>Card 3</h3>
                <span>Some text<br/></span>
             </div>
             </div>
             <div className="note-card">
               <div>
               <h3>Card 4</h3>
               <span>Some text<br/></span>
             </div>
          </div>
             <div className="note-card">
               <div>
               <h3>Card 5</h3>
               <span>Some text<br/></span>
             </div>
          </div>
             <div className="note-card">
               <div>
               <h3>Card 6</h3>
               <span>Some text<br/></span>
             </div>
          </div>
      </div>
      <br/>
      <br/>
    </>
  )
}

export default Notes;
