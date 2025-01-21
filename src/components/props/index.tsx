// import React from 'react'
type ComponentPropa={
 name:string; id:number;
 children?:React.ReactNode
}
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
