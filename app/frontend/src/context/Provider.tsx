import Context from './Context'

function Provider({children}: any) {
  const context = {

  }
  return(
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}

export default Provider;