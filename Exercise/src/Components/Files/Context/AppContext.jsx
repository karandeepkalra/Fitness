import React,{ useState }  from 'react'
import { createContext } from 'react'
import {data} from '../Data'
export const  AContext=createContext()
const AppContext = (props) => {
  const[token,setToken]=useState('')
  const currencySymbol ='$'
    const value={
        data,
        currencySymbol ,
        token,setToken,
    }
  return (
    <AContext.Provider value={value}>
        {props.children}
    </AContext.Provider>
  )
}

export default AppContext
