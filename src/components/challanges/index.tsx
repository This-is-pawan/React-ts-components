<<<<<<< HEAD
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

=======

// import React from 'react'
type profile={
 type:'basic'|'advanced';
 name:string;
 email:string;
}
const Challange = (props:profile) => {
 const {type,name,email}=props
 const alert=type==='basic'?'success':'danger'
 const className=`alert alert-${alert}`
  return (
   
<article className={className}>
    <div>
      <h2>Challange</h2>
{`BASIC: ${type} NAME: ${name} EMAIL: ${email}`}

    </div>
   </article>
  )
}

export default Challange

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

>>>>>>> 205698e04bad997c2c4f197133a77edd0ccb54d4
