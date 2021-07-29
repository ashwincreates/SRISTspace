import './auth.css';

function submit() {
  console.log("submitted");
}

function Auth() {
  return (
    <div className="center">
      <div className="box">
         <div className="auth" onSubmit={() => submit()}>
           <h2>Sign up</h2>
           <form>
           <input className="search text" placeholder="email"/>
           <input className="search text" placeholder="semester"/>
           <input className="search text" placeholder="stream"/>
           <input className="search text" placeholder="branch"/>
           <input className="search text" placeholder="password"/>
           <br />
           <button>Sign Up</button>
           </form> 
         </div>
      </div>
    </div>
  );
}

export default Auth;
