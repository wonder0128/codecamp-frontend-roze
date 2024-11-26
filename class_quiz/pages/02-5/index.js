import { useState } from "react";
import {
  MainContainer, LogoContainer, LoginContainer, FindUserContainer,
  LogoSub, LogoText, LoginInput, LoginBtn, ErrorMsg, FindUserInput, KakaoLoginBtn, KakaoLogoImg
} from '../../styles/eatsRoad'

export default function eatsRoad() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onClickLogin() {
    if(email === '' || !email.includes('@')){
      setEmailError('이메일 주소를 다시 확인해주세요.');
    } else {
      setEmailError('')
    }
    if(password === '' || password.length < 8) {
      setPasswordError('8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.')
    } else {
      setPasswordError('')
    }

  }
  
  return (
    <MainContainer>
      <LogoContainer>
        <img src="images/logo.png" style={{zIndex: 1}}></img>
        <LogoSub></LogoSub>
        <LogoText>잇츠로드</LogoText>
      </LogoContainer>
      <LoginContainer>
        <LoginInput onChange={onChangeEmail}></LoginInput>
        <ErrorMsg>{emailError}</ErrorMsg>
        <LoginInput type="password" onChange={onChangePassword}></LoginInput>
        <ErrorMsg>{passwordError}</ErrorMsg>
        <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
        <FindUserContainer>
          <FindUserInput>이메일 찾기</FindUserInput>
          <FindUserInput>|</FindUserInput>
          <FindUserInput>비밀번호 찾기</FindUserInput>
          <FindUserInput>|</FindUserInput>
          <FindUserInput>회원가입</FindUserInput>
        </FindUserContainer>
        <KakaoLoginBtn>
          <img src="images/kakao.png"></img>
          카카오톡으로 로그인
        </KakaoLoginBtn>
      </LoginContainer>
    </MainContainer>
  )
}