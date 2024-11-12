import { useState } from 'react'
import {
  BoardMain, Head, Board, User, Title, DefaultInput, DefaultDiv, ContentDiv, 
  ContentTextArea, AddressDiv, TinyInput, SearchBtn, DetailDiv, ImgDiv, UploadSpan,
  ImgAdd, MainSettingDiv, CustomLabel, AddBtn, ErrMsg
} 
from '../../../styles/board-emotion.js'

export default function newBoard() {

  const [writer, setWriter] = useState('');
  const [writerErr, setWriterErr] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const [title, setTitle] = useState('');
  const [titleErr, setTitleErr] = useState('');

  const [contents, setContents] = useState('');
  const [contentsErr, setContentsErr] = useState('');

  const [postCode, setPostCode] = useState('');
  const [postCodeErr, setPostCodeErr] = useState('');

  const [addressMain, setAddressMain] = useState('');
  const [addressMainErr, setAddressMainErr] = useState('');

  const [addressSub, setAddressSub] = useState('');
  const [addressSubErr, setAddressSubErr] = useState('');

  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [youtubeUrlErr, setYoutubeUrlErr] = useState('');

  const [mainSetting, setMainSetting] = useState('');
  const [mainSettingErr, setMainSettingErr] = useState('');

  // onChange 함수 적용
  function onChangeWriter(e) {
    setWriter(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangeContents(e) {
    setContents(e.target.value);
  }

  function onChangePostCode(e) {
    setPostCode(e.target.value);
  }

  function onChangeAddresssMain(e) {
    setAddressMain(e.target.value);
  }

  function onChangeAddressSub(e) {
    setAddressSub(e.target.value);
  }

  function onChangeYoutubeUrl(e) {
    setYoutubeUrl(e.target.value);
  }

  function onChangeMainSetting() {

  }

  function onClickAddBoard() {
    // 검증 
    if(!writer){
      setWriterErr('작성자를 입력해주세요.');
    }
    if(!password){
      setPasswordErr('비밀번호를 입력해주세요.');
    }
    if(!title){
      setTitleErr('제목을 입력해주세요.');
    }
    if(!contents){
      setContentsErr('내용을 입력해주세요.');
    }
    if(!postCode){
      setPostCodeErr('우편번호를 입력해주세요.');
    }
    if(!addressMain){
      setAddressMainErr('주소(메인)을 입력해주세요.');
    }
    if(!addressSub){
      setAddressSubErr('주소(보조)을 입력해주세요.');
    }
    if(!youtubeUrl){
      setYoutubeUrlErr('URL를 입력해주세요.');
    }
    if(!youtubeUrl.includes('.com')){
      setYoutubeUrlErr('URL를 정확히 입력해주세요.');
    }
  }

  
  return (
    <BoardMain>
      <Head>게시글 등록</Head>
      
      <Board>
        <User>
          <Title>작성자</Title>
          <DefaultInput placeholder='이름을 적어주세요.' onChange={onChangeWriter}></DefaultInput>
          <ErrMsg>{writerErr}</ErrMsg>
        </User>
        <User>
          <Title>비밀번호</Title> 
          <DefaultInput placeholder='비밀번호를 입력해주세요.' onChange={onChangePassword}></DefaultInput>
          <ErrMsg>{passwordErr}</ErrMsg>
        </User>
      </Board>
      
      <DefaultDiv>
        <Title>제목</Title>
        <DefaultInput placeholder='제목을 작성해주세요.' onChange={onChangeTitle}></DefaultInput>
        <ErrMsg>{titleErr}</ErrMsg>
      </DefaultDiv>
      
      <ContentDiv>
        <Title>내용</Title>
        <ContentTextArea placeholder='내용을 작성해주세요.' onChange={onChangeContents}></ContentTextArea>
        <ErrMsg>{contentsErr}</ErrMsg>
      </ContentDiv>
      
      <AddressDiv>
        <Title>주소</Title>
        <DetailDiv>
          <TinyInput placeholder='07250' onChange={onChangePostCode}></TinyInput>
          <SearchBtn>우편번호 검색</SearchBtn>
        </DetailDiv>
        <ErrMsg>{postCodeErr}</ErrMsg>
        <DefaultInput onChange={onChangeAddresssMain}></DefaultInput>
        <ErrMsg>{addressMainErr}</ErrMsg>
        <DefaultInput onChange={onChangeAddressSub}></DefaultInput>
        <ErrMsg>{addressSubErr}</ErrMsg>
      </AddressDiv>
      
      <DefaultDiv>
        <Title>유튜브</Title>
        <DefaultInput placeholder='링크를 복사해주세요.' onChange={onChangeYoutubeUrl}></DefaultInput>
        <ErrMsg>{youtubeUrlErr}</ErrMsg>
      </DefaultDiv>
      
      <DefaultDiv>
        <Title>사진 첨부</Title>
        <DetailDiv>
          <ImgDiv>
            <ImgAdd src="../images/Vector.png" alt="" />
            <UploadSpan>Upload</UploadSpan>
          </ImgDiv>
          <ImgDiv>
            <ImgAdd src="../images/Vector.png" alt="" />
            <UploadSpan>Upload</UploadSpan>
          </ImgDiv>
          <ImgDiv>
            <ImgAdd src="../images/Vector.png" alt="" />
            <UploadSpan>Upload</UploadSpan>
          </ImgDiv>
        </DetailDiv>
      </DefaultDiv>
      
      <MainSettingDiv>
        <Title>메인 설정</Title>
        <DetailDiv>
          <CustomLabel htmlFor="youtube">
            <input type="radio" name="youtube" id="youtube"/>
            유튜브
          </CustomLabel>

          <CustomLabel htmlFor="photo">
            <input type="radio" name="photo" id="photo"/>
            사진
          </CustomLabel>
        </DetailDiv>
      </MainSettingDiv>

      <DefaultDiv>
        <AddBtn onClick={onClickAddBoard}>등록하기</AddBtn>
      </DefaultDiv>
    </BoardMain>
  )
}