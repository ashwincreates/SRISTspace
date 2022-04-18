import {useEffect} from "react";

const UserProfile = (props) => {
  useEffect(() => {
    
  }, [])
  return (
    <>
        <div>This is User profile {props.match.params.userid}</div>
    </>
  )
}

export default UserProfile;
