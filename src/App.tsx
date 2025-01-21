import Component from "./components/props/index";

interface person{
  name:string;
  id:number;
}
const Per :person={
name:'harry',
id:123,
}

const App = () => {

  return (
    
      <main>
        <Component name={Per.name} id={Per.id} />
      </main>
  
  );
};

export default App;
