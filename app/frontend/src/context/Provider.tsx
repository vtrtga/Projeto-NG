import { useContext } from 'react';
import Context from './Context'

function Provider({ children }: any) {
  const context = useContext(Context);

  return(
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}

export default Provider;