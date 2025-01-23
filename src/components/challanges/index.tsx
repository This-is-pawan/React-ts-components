// import React from 'react'
type profileB={
 type:'basic';
 name:string;
 email:string;
}
type profileA={
 type:'advanced';
 name:string;
 email:string;
}
type profilecard=profileB|profileA
const Challange = (props:profilecard) => {
 const {type,name}=props
 if (type === 'basic') {
  return <article className="alert alert-success">
<h2>User:{name}</h2>
<h2>Basic:{type}</h2>
  </article>
 }
  
return <article className="alert-danger">
 <h2>user:{name}</h2>
 <h2>email:{props.email}</h2>
 
</article>
  
}

export default Challange

