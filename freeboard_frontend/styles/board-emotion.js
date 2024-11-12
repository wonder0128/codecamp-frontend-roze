import styled from '@emotion/styled'

export const BoardMain = styled.div `
  box-sizing: border-box;
  margin: 0 auto;
  width: 1200px;
  height: 1850px;
  padding: 60px 100px 100px 100px;
  border: 1px solid gray;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, .2);
`

export const Head = styled.h3 `
  text-align: center;
`

export const Board = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`

export const User = styled.div `
  width: 486px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.span `
  text-align: left;
  font-size: 16px;
  line-height: 24px;
`

export const DefaultInput = styled.input `
  height: 52px;
`

export const DefaultDiv = styled.div `
  width: 100%;
  height: 92px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContentDiv = styled.div `
  width: 100%;
  height: 520px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContentTextArea = styled.textarea `
  height: 480px;
`

export const AddressDiv = styled.div `
  height: 242px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TinyInput = styled.input `
  width: 78px;
  height: 52px;
  text-align: center;
`

export const SearchBtn = styled.button `
  width: 124px;
  background-color: #000;
  color: #fff;
  margin-left: 16px;
`

export const DetailDiv = styled.div`
  display: flex;
`

export const PhotoAddDiv = styled.div`
  height: 118px;
  display: flex;
  justify-content: space-between;
`

export const ImgDiv = styled.div`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #BDBDBD;
`

export const UploadSpan = styled.span`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const ImgAdd = styled.img`
  margin-bottom: 10px;
`

export const MainSettingDiv = styled.div`
  height: 64px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CustomLabel = styled.label`
  margin-right: 20px;
`

export const AddBtn = styled.button`
  width: 180px;
  height: 52px;
  text-align: center;
  background-color: #FFD600;
  margin: 0 auto;
  border-style: none;
  margin-top: 40px;
`

export const ErrMsg = styled.span `
  text-align: left;
  font-size: 14px;
  color: red;
`