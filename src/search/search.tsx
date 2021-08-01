import './search.css';
import Sdata from '../searchbar/Sdata';

function Search() {
  return (
    <div>
      <div className="head">
        <div className="section-title">
          <h2> Notes</h2>
        </div>
      </div>
      <div className="tray">
        {Sdata.map((val) => {
          return (
            <>
              <div className="note-card">
                <div>
                  <h3>{val.title}</h3>
                  <span>
                    {val.text}
                    <br />
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
