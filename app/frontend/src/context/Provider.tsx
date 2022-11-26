import { useState } from 'react';
import Context from './Context'

function Provider({ children }: any) {
  const [user, setUser] = useState<any>({});
  const [balance, setBalance] = useState<any>(0);
  const value: any =
  {
    user,
    setUser,
    balance,
    setBalance,
  };
  return(
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  )
}

export default Provider;