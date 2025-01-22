
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

