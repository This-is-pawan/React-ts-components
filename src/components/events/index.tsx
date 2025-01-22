import { useState } from "react";
interface Text{
 text:string;
 Email:string;
}
const Event = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data :Text ={
      text: formData.get("text"),
      // text: formData.get("text") as string
      // email: formData.get("email") as string
      email: formData.get("email"),
    };
    // const data=Object.fromEntries(formData)
    console.log(data);
  };

  return (
    <div>
      <h1>Events React ts</h1>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h2>form</h2>
        <input
          type="text"
          name="text"
          className="form-input"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <br /><br />
        <input
          type="email"
          name="email"
          className="form-input"
          value={email}
          onChange={handleChange}
        />
        <br /><br />
        <button className="btn" type="submit">submit</button>
      </form>
    </div>
  );
};

export default Event;
