import {BoardMain, Head, Board, User, Title, SmallInput, Content, BigInput} from '../../../styles/board-emotion.js'
export default function newBoard() {
  
  return (
    <BoardMain>
      <Head>게시글 등록</Head>
      <Board>
        <User>
          <Title>작성자</Title>
          <SmallInput placeholder='이름을 적어주세요.'></SmallInput>
        </User>
        <User>
          <Title>비밀번호</Title> 
          <SmallInput placeholder='비밀번호를 입력해주세요.'></SmallInput>
        </User>
      </Board>
      <Content>
        <Title>제목</Title>
        <BigInput>111</BigInput>
      </Content>
    </BoardMain>
  
  )
}