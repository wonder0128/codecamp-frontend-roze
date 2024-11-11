export default function CounterLetDocumentPage() {

  function onClickCountUp () {
    const result = Number(document.getElementById('qqq').innerText) + 1;
    document.getElementById('qqq').innerText = result;
  }

  function onClickCountDown () {
    const result = Number(document.getElementById('qqq').innerText) - 1;
    document.getElementById('qqq').innerText = result;
  }

  return (
    <div>
      <div id="qqq">0</div>
      <button onClick={onClickCountUp}>Counter Up!!</button>
      <button onClick={onClickCountDown}>Counter Down!!</button>
    </div>
  )

}