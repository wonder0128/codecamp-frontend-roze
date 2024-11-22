import { useState } from "react";

export default function classQuiz0203() {
  const [random, setRandom] = useState('000000')
  
  function onClickChangeNum() {
    // let changeNum = document.getElementById('number');
    // changeNum.textContent = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    setRandom(String(Math.floor(Math.random() * 1000000)).padStart(6, '0'))
  }
  return (
    <div>
      {/* <span id="number">000000</span> */}
      <span>{random}</span>
      <button onClick={onClickChangeNum}>인증번호전송</button>
    </div>
  )
}