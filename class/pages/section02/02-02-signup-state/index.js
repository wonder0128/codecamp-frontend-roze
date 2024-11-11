import { useState } from "react";

export default function SignupState() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  function onChangeEmail(event) {
    // 이벤트 핸들러 함수
    console.log(event); // 나의 행동
    console.log(event.target); // 작동된 태그
    console.log(event.target.value); // 작동된 태그의 입력된 값
    
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup(event) {

    // 진짜 포장이 잘 됐는지 확인해보기
    console.log(email)
    console.log(password)
    
    // 1. 검증하기
    if(!email.includes('@')){
      // alert('이메일이 올바르지 않습니다. (@ 누락)');
      // document.getElementById('emailErr').innerText = '이메일이 올바르지 않습니다. (@ 누락)'; => 옛날방식
      setEmailError('이메일이 올바르지 않습니다. (@ 누락)');
    } else {
      
      // 2. 백엔드 PC에 보내주기(백엔드 개발자가 만든 함수. 즉, API)
      //  => 나중에
  
      // 3. 성공 알람 보여주기
      alert('회원가입을 축하합니다.');
    }

  }

  return (
    <div>
      이메일 : <input type="text" onChange={onChangeEmail}/>
      {/* <div id="emailErr">이메일이 올바르지 않습니다. (@ 누락)</div> => 옛날 방식*/}
      <div>{emailError}</div>
      비밀번호 : <input type="password" onChange={onChangePassword}/>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  )
}