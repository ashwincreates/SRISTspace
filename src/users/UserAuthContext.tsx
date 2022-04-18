import React from "react";

export interface User {
  name: String;
  user_id: String;
  login: Boolean;
}

export const UserContext = React.createContext({
  user: {} as User,
  updatedUser: (u: User) => {
    console.log(u)
  },
  updatLogin: (l: boolean) => {
    console.log(l)
  },
})
