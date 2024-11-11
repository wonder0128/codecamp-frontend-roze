import {
  Main, TopBox, SearchBox, SearchImg, ContentBox, TitleBox, BigSpan, UserNameSpan,
  MenuBox, MenuSpan, MenuSpanActive, QnABox, ListBox, ListSubBox, Label, SmallSpan,
  FooterBox, FooterMenu, LabelActive
} from '../../styles/quiz01-emotion.js'

export default function quiz01 () {
  
  return (
    <Main>
      <TopBox></TopBox>
      <SearchBox>
        <SearchImg src='images/Group.png'></SearchImg>
      </SearchBox>
      <ContentBox>
        <BigSpan>마이</BigSpan>
        <TitleBox>
          <img src='images/profile.png'></img>
          <UserNameSpan>임정아</UserNameSpan>
          <img src='images/arrow_right.png'></img>
        </TitleBox>
      </ContentBox>
      <MenuBox>
        <MenuSpan>공지사항</MenuSpan>
        <MenuSpan>이벤트</MenuSpan>
        <MenuSpanActive>FAQ</MenuSpanActive>
        <MenuSpan>Q&A</MenuSpan>
      </MenuBox>
      <QnABox>
        <ListBox>
          <ListSubBox>
            <Label>Q. 01</Label>
            <SmallSpan>리뷰 작성은 어떻게 하나요?</SmallSpan>
          </ListSubBox>
          <img src='images/arrow_down.png'></img>
        </ListBox>
        <ListBox>
          <ListSubBox>
            <Label>Q. 02</Label>
            <SmallSpan>리뷰 수정/삭제는 어떻게 하나요?</SmallSpan>
          </ListSubBox>
          <img src='images/arrow_down.png'></img>
        </ListBox>
        <ListBox>
          <ListSubBox>
            <Label>Q. 03</Label>
            <SmallSpan>아이디/비밀번호를 잊어버렸어요</SmallSpan>
          </ListSubBox>
          <img src='images/arrow_down.png'/>
        </ListBox>
        <ListBox>
          <ListSubBox>
            <Label>Q. 04</Label>
            <SmallSpan>회원탈퇴를 하고싶어요.</SmallSpan>
          </ListSubBox>
          <img src='images/arrow_down.png'/>
        </ListBox>
        <ListBox>
          <ListSubBox>
            <Label>Q. 05</Label>
            <SmallSpan>출발지 설정은 어떻게 하나요?</SmallSpan>
          </ListSubBox>
          <img src='images/arrow_down.png'/>
        </ListBox>
        <ListBox>
          <ListSubBox>
            <Label>Q. 06</Label>
            <SmallSpan>비밀번호를 변경하고 싶어요</SmallSpan>
          </ListSubBox>
          <img src='images/arrow_down.png'/>
        </ListBox>
      </QnABox>
      <FooterBox>
        <FooterMenu>
          <img src='images/home.png'/>
          <Label>홈</Label>
        </FooterMenu>
        <FooterMenu>
          <img src='images/location.png'/>
          <Label>잇츠로드</Label>
        </FooterMenu>
        <FooterMenu>
          <img src='images/heart.png'/>
          <Label>마이찜</Label>
        </FooterMenu>
        <FooterMenu>
          <img src='images/user.png'/>
          <LabelActive>마이</LabelActive>
        </FooterMenu>
      </FooterBox>
    </Main>
  )
}