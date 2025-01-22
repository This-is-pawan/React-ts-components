// import Component from "./components/props/index";
import Challange from "./components/challanges/index.js";
// import Event from "./components/events/index";
// console.log();


// interface person{
//   name:string;
//   id:number;
// }
// const Per :person={
// name:'harry',
// id:123,
// }
import './components/test.js'
const App = () => {

  return (
    
      <main>
        {/* <Component name={Per.name} id={Per.id} /> */}
  {/* <Component name='peter' id={123} >
    <h2>Hello ,there is a code of children props </h2>
  </Component>
        <Component name={'harry'} id={123} /> */}
        {/* <Component name={'harry'} id={123} /> it get an error of ts children so in index.tsx of use optional in type of children? */}

     {/* <Event /> */}
     {/* <Challange type='advance'name='anna' /> */}
     <Challange type='basic'name='susan' email='susan@gmail.com' />


      </main>
  
  );
};

export default App;
