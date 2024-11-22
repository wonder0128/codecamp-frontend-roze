import { useState } from "react"

export default function classQuiz0201() {

  const [btn, setBtn] = useState('안녕하세요.');

  function onClickBtnWithId(){
    let withId = document.getElementById('hello');
    withId.textContent = '반갑습니다.'
  }

  function onClickBtnWithReact() {
    setBtn('반갑습니다.');
  }

  return (
    <div>
      {/* <button id="hello" onClick={onClickBtnWithId}>안녕하세요</button> */}
      <button onClick={onClickBtnWithReact}>{btn}</button>
    </div>
  )
}