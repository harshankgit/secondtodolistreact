import React, { useState } from "react";

const Comp = (props) => {
    const [cut1,setcut2]= useState(false)
    const cut=()=>{
        setcut2(true)
    }
    const Docut=()=>{
        setcut2(false)
    }
  return (
    <div>
      <div className="main">
        <span onClick={cut} onDoubleClick={Docut}> 
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Icons8_flat_delete_generic.svg/800px-Icons8_flat_delete_generic.svg.png" alt="" /></span>
        <li style={{ textDecoration: cut1 ? "line-through" : 'none'}}>{props.text}</li>
      </div>
    </div>
  );
};

export default Comp;
