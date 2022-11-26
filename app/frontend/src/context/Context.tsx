import React from "react";
import IContext from "../interfaces/IContext";

const Context = React.createContext<IContext | any>(
  {
   user: {},
   setUser: (user: any) => {},
   balance: 0,
   setBalance: (balance: number) => {},
  },
   );

export default Context;