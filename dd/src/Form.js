import React from "react";

const Form = ({ value, onChange, onKeyPress, onCreate }) => {
  return(
  <div className="form">
    <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
    <div className="submit" onClick={onCreate}>
      생성
    </div>
    </div>
  )
}

export default Form