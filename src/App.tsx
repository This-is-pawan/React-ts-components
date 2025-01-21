import Component from "./components/props/index";


// interface person{
//   name:string;
//   id:number;
// }
// const Per :person={
// name:'harry',
// id:123,
// }

const App = () => {

  return (
    
      <main>
        {/* <Component name={Per.name} id={Per.id} /> */}
  <Component name='peter' id={123} >
    <h2>Hello ,there is a code of children props </h2>
  </Component>
        <Component name={'harry'} id={123} />
        {/* <Component name={'harry'} id={123} /> it get an error of ts children so in index.tsx of use optional in type of children? */}
      </main>
  
  );
};

export default App;
