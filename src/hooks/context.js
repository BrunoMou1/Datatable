import { createContext, useState, useContext } from 'react';

const ServerContext = createContext()

export function ServerProvider({ children }) {
  const [server, setServer] = useState([])
  const [dataAlreadyExist, setDataAlreadyExist] = useState(false)

  return (
    <ServerContext.Provider
      value={{ server, setServer, dataAlreadyExist, setDataAlreadyExist }}
    >
      {children}
    </ServerContext.Provider>
  )

}

export function useServer() {
  const context = useContext(ServerContext);

  return context;
}