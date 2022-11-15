import React from "react";
import './Items.css'

type ItemsProps = {
  text: any
}

const Items = ({ text }: ItemsProps) => (
  <div className="itembox">
    <input className="checkbox" type='checkbox' />
    <div className="textbox">{text}</div>
  </div>
)

export default Items