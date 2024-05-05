import React from 'react'

export const Button = ({children, className , onClick, disabled}) => {
  return (
      <div>
          <button disabled={disabled} onClick={onClick} className={` btn  btn-primary rounded-3  ${className} ${disabled? "disbaled":""}`}>
          {children}
          </button>
    </div>
  )
}



//nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn