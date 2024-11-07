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
  border: 1px solid tomato;
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
  /* height: 52px; */
  background-color: #000;
  color: #fff;
  margin-left: 16px;
`

export const DetailDiv = styled.div`
  height: 52px;
  display: flex;
`