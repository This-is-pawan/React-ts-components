### ts code
```ts
interface Person {
  name: string;
}
interface Employee extends Person {
  salary: number;
}
type Person = {
  name: string;
}
type Employee = Person & {
  salary: number;
}

type Status = "pending" | "success" | "error";
interface Dog {     
  name: string;
}
interface Dog {
  breed: string;
}

```
### void use
```ts
when any condition is cannot return then use  the void function in the typescript  
```
### different type of function 
```js
type student={
name:String,
study:()=> void;
}
type User={
name:String,
login:()=> void;
}

type Person= student|User

const randomPerson=():Person=>{
return Math.random()>0.5 ?{name:'john',study:()=>console.log('studying)}:{name:'mary',login:()=>console.log('logging in)}
}
const Person=randomPerson()



```
