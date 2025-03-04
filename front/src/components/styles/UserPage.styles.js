import styled from 'styled-components';

export const BooksUl = styled.ul`
  justify-content: center;
  display: flex;
  position: relative;
  top: -180px;
`;

export const ButtonChange = styled.button`
  font-family:
    IBM Plex Sans,
    sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #000000;
  padding: 12px 70px;
  border-radius: 5px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  position: relative;
  top: -350px;
  margin-left: 40px;
  &:hover {
    background-color: #474646;
  }
`;

export const ButtonMsg = styled.button`
  font-family:
    IBM Plex Sans,
    sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #000000;
  padding: 12px 70px;
  border-radius: 5px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  top: -350px;
  &:hover {
    background-color: #474646;
  }
  @media only screen and (max-width: 768px) {
    background-color: blue;
  }
`;

export const ImgAvatar = styled.img`
  width: 299px;
  height: 275px;
  margin-top: 80px;
  margin-left: 20px;
  border: 2px solid #000000;
  border-radius: 5px;
`;

export const BookMenuLi = styled.li`
  color: black;
  padding: 35px 35px 5px;
  font-family: "Manrope", sans-serif;
`;

export const DescriptionDiv = styled.div`
  width: 700px;
  height: 150px;
  background-color: rgb(0, 0, 0);
  margin: 0 auto;
  position: relative;
  top: -200px;
  border-radius: 10px;
`;

export const UsernameParagraph = styled.p`
  text-align: center;
  font-size: 25px;
  color: white;
`;

export const DescriptionParagraph = styled.p`
  color: white;
  text-align: center;
  margin-top: 10px;
`;

export const DescriptionParagraphUpper = styled.p`
  color: white;
  text-align: center;
  font-size:15px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -230px;
`;

export const IconImg = styled.img`
  margin: 53px;
  position: relative;
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  top: 30px;
`;

export const CountParagraph = styled.p`
  margin: 0;
  text-align: center;
  line-height: 1;
  font-size: 14px;
  top: -30px;
  position: relative;
`;

export const TitleError = styled.h1`
  text-align: center;
  font-family: "Manrope", sans-serif;
  position: relative;
  top: 70px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 90px;
`;

export const BottomFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 230px;
`;

export const IconCountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const H2Alert = styled.h2`
  text-align: center;
  font-family: "Space Mono", monospace;
  position: relative;
  top: 450px;
`;

export const ImgAlert = styled.img`
  display: block;
  margin: auto;
  position: relative;
  top: 120px;
`;

export const H2ErrorAlert = styled.h2`
  text-align: center;
  font-family: "Space Mono", monospace;
  position: relative;
  top: 80px;
`;

export const IconSupport = styled.img`
  display: block;
  margin: auto;
  position: relative;
  top: 65px;
  width: 20px;
  background-color: #feb95e;
  border-radius: 5px;
  opacity: 80%;
`;
