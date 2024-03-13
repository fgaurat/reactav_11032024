import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount,reset } from './counterSlice'

export function Counter() {

  
  const count = useSelector((state: RootState) => state.counter.value)
  
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button
          aria-label="incrementByAmount"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          incrementByAmount
        </button>

        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}