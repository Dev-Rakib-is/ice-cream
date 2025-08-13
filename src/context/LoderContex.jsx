import { createContext,useContext,useState } from "react"

const LoderContex = createContext();

export const LoderProvider = ({children }) => {
    const [loading,setLoading] = useState(false) 
  return (
    <LoderContex.Provider value={{loading,setLoading}}>
        {children}
    </LoderContex.Provider>
  )
}

export const useLoader = () => useContext(LoderContex)