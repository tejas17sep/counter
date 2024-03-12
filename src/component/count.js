import React, { useState } from 'react'
import style from "./count.module.css";

const Count = () => {

 
    const [countnew,setcountnew] = useState(0)

const addCount = () => {
   
     setcountnew(countnew + 1)
}
const subCount = () => {
 
     setcountnew(countnew - 1)

}



var sum = "+";
var sub = "-";



  return (
    <div className={style.display}>
      <h1 className={style.Name}>Counter</h1>
      <p className={style.displayCount}>{countnew}</p>
      <button className={style.Btn1} onClick = {() => addCount(sum)}>{sum}</button>
        
      <button className={style.Btn2} onClick = {() => subCount(sub)}>{sub}</button>
    </div>
  )
}

export default Count
