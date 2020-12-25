import React from "react";
import "./styles.css";
export default function Counter(props) {
 const {id,value,onDelete,onIncrement}=props;
  return (
    <div className="App">
<span className={value===0 ? "red":"green"}>
{value===0?"Zero" :value}</span>
<button onClick={()=>onIncrement(id)}>increment</button> 
<button onClick={()=>onDelete(id)}>Delete</button>
    </div>
  );
}
