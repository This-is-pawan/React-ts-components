
import { useState } from "react"
type Nav={
id:number;
url:string;
text:string;
}
const navLinks:Nav[]=[
 {
  id:1,
  url:'some url',
  text:'some text',
 },
 {
  id:2,
  url:'some url',
  text:'some text',
 },
 {
  id:3,
  url:'some url',
  text:'some text',
 }
]


// console.log(navLinks);



const State = () => {
// const [text,setText]=useState('shake')
// const [num,setNum]=useState(1)
// const [list,setList]=useState<string[]>([])
const [list,setList]=useState<Nav[]>(navLinks)
  return (
    <div>
     
       <h1>state & React & ts  <h2>{list.length}</h2>
       </h1>
       <button className="btn btn-center" onClick={()=>{
        // setText('sg')
        // setText(1234) this no is not use due to ts
        // setNum(123)
        // setList([' but not only  other lan also learnt form him'])
        setList([...list,{id:4,url:'loo',text:'jhgf'}])
       }}>click me </button>
     
    </div>
  )
}

export default State
