import {BoardMain, Head, Board, User, Title, DefaultInput, DefaultDiv, ContentDiv, ContentTextArea, AddressDiv, TinyInput, SearchBtn, DetailDiv} from '../../../styles/board-emotion.js'
export default function newBoard() {
  
  return (
    <BoardMain>
      <Head>게시글 등록</Head>
      <Board>
        <User>
          <Title>작성자</Title>
          <DefaultInput placeholder='이름을 적어주세요.'></DefaultInput>
        </User>
        <User>
          <Title>비밀번호</Title> 
          <DefaultInput placeholder='비밀번호를 입력해주세요.'></DefaultInput>
        </User>
      </Board>
      <DefaultDiv>
        <Title>제목</Title>
        <DefaultInput placeholder='제목을 작성해주세요.'></DefaultInput>
      </DefaultDiv>
      <ContentDiv>
        <Title>내용</Title>
        <ContentTextArea placeholder='내용을 작성해주세요.'></ContentTextArea>
      </ContentDiv>
      <AddressDiv>
        <Title>주소</Title>
        <DetailDiv>
          <TinyInput placeholder='07250'></TinyInput>
          <SearchBtn>우편번호 검색</SearchBtn>
        </DetailDiv>
        <DefaultInput></DefaultInput>
        <DefaultInput></DefaultInput>
      </AddressDiv>
      <DefaultDiv>
        <Title>유튜브</Title>
        <DefaultInput placeholder='링크를 복사해주세요.'></DefaultInput>
      </DefaultDiv>
      <DefaultDiv>
        <Title>사진 첨부</Title>
      </DefaultDiv>
    </BoardMain>
  )
}