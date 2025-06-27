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
```ts
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
### ZOD in ts
🧾 What is the Zod library?
Zod is a TypeScript-first schema validation library. It helps you:

Define the structure of data (like forms, API responses, etc.)

Validate data at runtime (make sure it matches the expected type)

Infer TypeScript types automatically from your schemas

📌 Why use Zod?
✅ Validates JSON, forms, API inputs/outputs
✅ Works well with TypeScript (auto-type inference)
✅ Easy to use, no decorators or classes
✅ Safer than just using type or interface (which exist only at compile time)
```ts
import { z } from "zod";

// 1. Define a schema
const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(18),
});

// 2. Parse and validate
const result = UserSchema.safeParse({ name: "John", age: 20 });

if (result.success) {
  console.log("Valid user:", result.data); // Type-safe!
} else {
  console.error("Validation errors:", result.error.format());
}

```
