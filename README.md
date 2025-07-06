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
### autentication with mysql frontend register
 
```js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;

    try {
      const res = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });
      if (!res.data) {
        toast.error(`something went wrong!`);
      } else {
        toast.success(`Registered successfully`);
             navigate("/login");
      }
    } catch (error) {
      toast.error(`Register error`);
    }
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <form
        className="w-full max-w-md p-6 bg-blue-200 rounded-lg shadow-lg grid gap-4"
        onSubmit={handleForm}
      >
        <h2 className="text-xl font-bold text-center text-gray-700">
          Register
        </h2>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            className="mt-1 p-2 rounded text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="mt-1 p-2 rounded text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            className="mt-1 p-2 rounded text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>
        <p className="">
          <span className="px-2">if you already have register</span>
          <Link to="/login" className="text-blue-900">
            login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
```




