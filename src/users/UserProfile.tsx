const UserProfile = (props) => {
  return (
    <>
        <div>This is User profile {props.match.params.userid}</div>
    </>
  )
}

export default UserProfile;
