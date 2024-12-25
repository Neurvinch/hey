import React from 'react'

const Button = ({
    children,
    onClick,
    disabled,
}) => {
  return (
    <button onClick={onClick}
    className={`py-2 px-32 rounded-2xl text-black text-4xl cursor-pointer ${disabled ? "bg-blue-200":"bg-green-300"}`}>{children}</button>
  )
}

export default Button