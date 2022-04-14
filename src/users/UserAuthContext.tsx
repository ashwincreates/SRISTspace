import React from "react";

const User = {
  user_id : "awda",
  name : "John Wick",
  login : true,
}

export default User;
export const UserContext = React.createContext(User)
