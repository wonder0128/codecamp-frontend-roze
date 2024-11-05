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
  border: 1px solid red;
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

export const SmallInput = styled.input `
  height: 52px;
`

export const Content = styled.div `
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  border: 1px solid green;
`

export const BigInput = styled.input `
  height: 52px;
`