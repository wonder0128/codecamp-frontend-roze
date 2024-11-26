import { useState } from "react";
import {ErrorMsg} from '../../styles/quiz02-4'

export default function classQuiz0204 () {
  const [email, setEmail] = useState('');
  const [emailErr, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordError] = useState('');
  
  const [passwordChk, setPasswordChk] = useState('');
  const [passwordChkErr, setPasswordChkError] = useState('');


  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onChangePasswordChk(e) {
    setPasswordChk(e.target.value);
  }

  function onClickSign() {
    if(!email.includes('@')){
      setEmailError('이메일 형식을 맞춰주세요.');
    } else {
      setEmailError('');
    }
    if(password !== passwordChk){
      setPasswordError('비밀번호가 일치하지 않습니다.');
      setPasswordChkError('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordError('');
      setPasswordChkError('');
    }

    if(email.includes('@') && password === passwordChk){
      alert('가입을 축하합니다.');
    }
  }

  return (
    <div>
      <div>
        <span>이메일 : </span>
        <input type="text" onChange={onChangeEmail}/>
        <ErrorMsg>{emailErr}</ErrorMsg>
      </div>
      <div>
        <span>비밀번호 : </span>
        <input type="password" onChange={onChangePassword} />
        <ErrorMsg>{passwordErr}</ErrorMsg>
      </div>
      <div>
        <span>비밀번호 확인 : </span>
        <input type="password" onChange={onChangePasswordChk}/>
        <ErrorMsg>{passwordChkErr}</ErrorMsg>
      </div>
      <button onClick={onClickSign}>가입하기</button>
    </div>
  )
}