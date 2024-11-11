import { useState } from "react"

export default function CounterStatePage() {
  // let count = 0 // let은 리액트 전용 html에서 변경을 감지하지 못함(따라서, state사용해야 함)
  const [count, setCount] = useState(0);

  function onClickCountUp () {
    setCount(count + 1);
  }

  function onClickCountDown () {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>Counter Up!!</button>
      <button onClick={onClickCountDown}>Counter Down!!</button>
    </div>
  )

}