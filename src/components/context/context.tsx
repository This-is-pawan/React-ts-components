// import React from 'react'
import { createContext,useContext,useState } from "react";
type Theme='light'|'dark'|'system';
type ThemeProviderState={
 theme:Theme,
 setTheme:(theme:Theme)=>void;
}
// const ThemeProviderContext=createContext<string|undefined>(undefined);
const ThemeProviderContext=createContext<{name:string}|undefined>(undefined);
type ThemProviderProps={
childern:React.ReactNode;
defaultTheme?:Theme;
}
export function ThemeProvider({children,defaultTheme='system'}:ThemProviderProps){
 const [theme,setTheme]=useState<Theme>(defaultTheme)
 // return <ThemeProviderContext.Provider value={{name:'harry'}}>
 return <ThemeProviderContext.Provider value={{theme,setTheme}}>
  {children}
 </ThemeProviderContext.Provider>
}

 
export const useTheme=()=>{
 const context=useContext(ThemeProviderContext)
 if(context ===undefined)
  throw new Error("useTheme must be used wihtin the ....");
  
  return context
}



