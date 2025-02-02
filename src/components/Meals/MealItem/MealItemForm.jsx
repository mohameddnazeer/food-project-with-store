import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealItemForm = (props) => {

  const [amountIsValid , setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber =+enteredAmount;
    if(enteredAmount.trim().length === 0 
      || enteredAmountNumber < 1 
      || enteredAmountNumber >10
    ){
      setAmountIsValid(false);
      return
    }
    props.addToCartHandler(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount" ref={amountInputRef}
        input={{
          id: "amount_"+props.id,
          type: "number",
          min: '1',
          max: '10',
          step:'1',
          defaultValue: '1'
      }}/>
      <button>+ Add </button>
      {!amountIsValid && <p>please enter a valid amount (1 - 10).</p>}
    </form>
  )
}

export default MealItemForm