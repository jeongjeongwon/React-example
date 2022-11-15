import React from "react";
import './Submit.css'

type SubmitProps = {
  value?: any
}

const onChange = (e:any) => {}
const onKeyPress = (e: any) => { }

const Submit = ({value}:SubmitProps) => (
  <div className="form">
    <input onChange={onChange} onKeyPress={onKeyPress} />
    <button className="submit" type="submit">
      생성
    </button>
  </div>
)

export default Submit