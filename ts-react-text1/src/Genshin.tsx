import React from "react";
import './Genshin.css'
import Submit from './Submit'
import List from './List'


type GenshinProps = {
  title: string
}

const Genshin = ({ title }: GenshinProps) => (
  <div className="main">
    <div className="top">{title}</div>
    <div className="mid">
      <Submit />
    </div>
    <div className="bottom">
      <List />
    </div>
  </div>
)

export default Genshin