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
✅  Validates JSON, forms, API inputs/outputs
✅ Works well with TypeScript (auto-type inference)i
   Easy to use, no decorators or classes
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
### Autentication with mysql frontend register
 
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

### autentication with mysql frontend login
```
import React, { use, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log(res.data.success);

      if (!res.data) {
        toast.error(`something went wrong! `);
      } else {
        toast.success(`login successfully `);
        navigate("/register");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <form
        className="w-full max-w-md p-6 bg-blue-200 rounded-lg shadow-lg grid gap-4"
        onSubmit={handleForm}
      >
        <h2 className="text-xl font-bold text-center text-gray-700">Login</h2>

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
          Login
        </button>
        <p className="">
          <span className="px-2">if you have no account</span>
          <Link to="/register" className="text-blue-900">
            register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

```
### Autentication with mysql backend server.js
```js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pk1234@#",
  database: "crud",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Register route
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Name, email, and password are required." });
  }

  const checkSql = "SELECT * FROM register WHERE email = ?";
  db.query(checkSql, [email], (err, results) => {
    if (err) {
      console.error("Error checking user:", err);
      return res
        .status(500)
        .json({ message: "Database error during user check." });
    }

    if (results.length > 0) {
      console.log("Email already exists:", email);
      return res.status(409).json({ message: "Email already registered." });
    }

    const insertSql =
      "INSERT INTO register (name, email, password) VALUES (?, ?, ?)";
    db.query(insertSql, [name, email, password], (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ message: "Registration failed." });
      }

      return res
        .status(201)
        .json({ message: "Registration successful", userId: result.insertId });
    });
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request:", email, password);

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const checkSql = "SELECT * FROM register WHERE email = ?";
  db.query(checkSql, [email], (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ message: "Database error." });
    }

    if (results.length === 0) {
      console.log("No user found with email:", email);
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const user = results[0];
    console.log("Found user:", user);

    if (user.password !== password) {
      console.log("Password mismatch");
      return res.status(401).json({ message: "Invalid email or password." });
    }

    return res.status(200).json({ message: "Login successful", userId: user.id });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

```

 ### sequilize  libaray of nodejs
 ```js
const express = require("express");
const { dbconnection } = require("./config/dbconnect");
const app = express();
app.use(express.json());
UserModel.sync({ force: false });
// drop and then create the table
app.listen(4000, async () => {
  console.log(`server is listen at port :4000`);
  await dbconnection();
});

// router
const router = require("express");
const router = express.Router();
router.post("/add", createUser);
router.get("/getallusers", getUser);
router.get("/getuser/:id", getUserByid);
router.put("/update/:id", updateUser);
router.delete("/detete/:id", deleteUser);
module.exports = { router };

// controller
const { validate } = require("joi");

exports.createUser =async (req, res) => {
  const { error } = validate(req.body, userSchema);
  if (error) return res.status(400).json(error.details[0].message);
  const user=await UserModel.create(req.body);
  return res.json(user)

};
exports.getUser = (req, res) => {
  const { name } = req.body;
};
exports.getUserByid = (req, res) => {
  const { name } = req.params;
};

exports.updateUser = (req, res) => {
  const { name } = req.params;
};
const deleteUser = (req, res) => {};
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnect");
// model schema
const UserModel = sequelize.default(
  "user",
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    mobileNumber: DataTypes.INTEGER,
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = { UserModel };
// validation (middlware.js)like max password characters so use libaray joi npm i joi
const joi = require("joi");
const userSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email(),
  password: joi.string.min(6).rwequried(),
  age: joi.number().integer().min(0).requried(),
  mobileNumber: joi.number.integer().requried(),
  isActive: joi.boolean().default(true),
});
moudel.exports = { userSchema };

```


