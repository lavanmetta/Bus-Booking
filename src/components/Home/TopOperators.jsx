import React from 'react'
import { OperatorsList } from '../Data/Operators'
import { useEffect, useState } from 'react'
const TopOperators = () => {
    const [operator, setOperator] = useState([])

    useEffect(() => {
       const operators = OperatorsList()
       setOperator(operators)
       
    }, [])

  return (
    <div className='operators-container'>
    <div><h5>Top Operators</h5></div>
      {
        operator.map((element, index) => (
            <span key={index}>{`${element} | `}</span>
          ))
      }
    </div>
  )
}

export default TopOperators
