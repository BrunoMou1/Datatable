import { createContext, useState, useContext } from 'react';

const ServerContext = createContext()

export function ServerProvider({ children }) {
  const [server, setServer] = useState([])

  return (
    <ServerContext.Provider
      value={{ server, setServer }}
    >
      {children}
    </ServerContext.Provider>
  )

}

export function useServer() {
  const context = useContext(ServerContext);

  return context;
}