import styled from '@emotion/styled'

export const MainContainer = styled.div `
  width: 640px;
  height: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-image: url('images/eatsroad.png');
  background-size: cover;
`
export const LogoContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LogoSub = styled.div `
  width: 72px;
  height: 24px;
  background-color: #D9D9D9;
  opacity: 60%;
  border-radius: 50px;
  position: absolute;
  top: 17%;
`
export const LogoText = styled.span `
  font-size: 60px;
  font-weight: 700;
  color: #FFF;
  margin-top: 28px;
`
export const LoginContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 50px 0;
`
export const LoginInput = styled.input `
  height: 35px;
  margin-top: 30px;
  background-color: transparent;
  border-style: none;
  border-bottom: 1px solid #7D7D7D;
  color: #FFF;
  font-size: 24px;
  background-image: url('images/close.png');
  background-repeat: no-repeat;
  background-position: right;
`
export const LoginBtn = styled.button `
  margin-top: 20px;
  height: 76px;
  background-color: rgba(255, 27, 109, .6);
  border-radius: 38px;
  font-size: 26px;
  font-weight: 700;
  color: #FFF;
`
export const FindUserContainer = styled.div`
  margin-top: 38px;
  display: flex;
  justify-content: space-evenly;
`
export const FindUserInput = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #FFF;
`
export const KakaoLoginBtn = styled.button `
  height: 76px;
  background-color: transparent;
  font-size: 26px;
  font-weight: 700;
  color: #FFE100;
  border-radius: 38px;
  margin-top: 58px;
  padding: 0 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid #FAE100;
`
export const ErrorMsg = styled.span `
  color: #FF1B6D;
  font-size: 16px;
  margin-top: 4px;
`