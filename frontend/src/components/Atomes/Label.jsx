import React from 'react'

const Label = (props) => {
  return (
    <label 
    for={props.for}
    className={props.className}
    >
    {props.content}
    </label>
  )}

export default Label
