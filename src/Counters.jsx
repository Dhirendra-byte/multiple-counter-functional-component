import React from "react";
import "./styles.css";
import Counter from "./Counter";
export default function Counters(){
    const [counters,setCounters]=React.useState([
      {id:1, value:0},
      {id:2, value:2},
      {id:3, value:0}
    ])

const handleIncrement=(id)=>{
    const countersCopy=counters.map((counter)=>{
    const counterCopy={...counter};
    if(counterCopy.id===id){
      counterCopy.value++;
    }
    return counterCopy;
    });
setCounters(countersCopy);
}
const handleDelete=(id)=>{
const filteredCounter=counters.filter(counter=>counter.id!==id)
setCounters(filteredCounter)
}
const handleReset=()=>{
const countersReset=counters.map((counter)=>{
counter.value=0;
return counter;
});
setCounters(countersReset);
}
return(<>
 <div><button onClick={handleReset}>Reset</button></div>
 {counters.length >0 && (
 <div>there are {counters.length} items in cart</div>)}
 {counters.length!==0 ?
  counters.map(counter=> (<Counter 
  key={counter.id} id={counter.id} value={counter.value}
   onDelete={handleDelete} onIncrement={handleIncrement}/>)):
   "there is no items in your cart"}
  </>
)
} 