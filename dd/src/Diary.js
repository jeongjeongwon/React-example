import React from "react";

const Diary = ({form, children}) => {
  return (
    <main className="DiaryList">
      <div className="title">
        연습장
      </div>
      <div className="form-set">
        {form}
      </div>
      <div className="wrapper">
        {children}
      </div>
    </main>
  )
}

export default Diary