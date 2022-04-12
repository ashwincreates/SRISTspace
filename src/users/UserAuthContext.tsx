import React from "react";

const User = {
  user_id : "",
  name : "",
  login : false,
}

export default User;
export const UserContext = React.createContext(User)
