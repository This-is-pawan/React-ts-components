### ts code
```
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
```
when any condition is cannot return then use  the void function in the typescript  



```
