function Component():JSX.Element |string |null {
 // return null
 // return 'helo'  if jsx.element is not use then not get an error in it
 return (
  <div>
   {/* :JSX.Element return a jsx element */}
   {/* <h2>React & TypeScript</h2> */}
   <h2>Return Type</h2>
  </div>
 )
}
export default Component