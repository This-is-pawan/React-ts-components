// import React from 'react'
import { type PropsWithChildrenw } from "react"

// type ComponentPropa={
//  name:string; id:number;
//  children?:React.ReactNode
// }
type ComponentPropa=PropsWithChildrenw<{
 name:string; 
 id:number;

}>
const Components = ({name,id,children}:ComponentPropa) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      {children}
      <h1>Id:{id}</h1>
    </div>
  )
}

export default Components
