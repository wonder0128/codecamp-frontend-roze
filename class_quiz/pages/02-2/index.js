import { useState } from "react"


export default function classQuiz0202() {
  const [count, setCount] = useState(0)

  // function onClickCountUp() {
  //   let cntNum = document.getElementById('cntNum');
  //   let newNumber = Number(cntNum.innerText);
  //   console.log(cntNum.textContent, newNumber++,'cntNum')
  //   cntNum.textContent = newNumber++;
  // }

  function onClickCountUp() {
    setCount(count+1);
  }
  return (
    <div>
      {/* <span id="cntNum">0</span> */}
      <span>{count}</span>
      <button onClick={onClickCountUp}>카운트 증가</button>
    </div>
  )
}