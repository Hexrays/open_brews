import styled from "@emotion/styled";

export const Section = styled.section`
  width: 600px;

  @media (max-width: 768px) {
    width: auto;
    flex-grow: 1;
    margin-right: 25px;
  }
`;

export const SectionWithMargin = styled(Section)`
  margin-left: 150px;

  @media (max-width: 768px) {
    margin-left: 75px;
  }
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #aeaeae;
  display: flex;
  justify-content: flex-start;
`;

export const ImageContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;

    img {
      max-width: 75%;
      object-fit: contain;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Logo = styled.div`
  width: 150px;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    width: 75px;
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-top: 18px;

  a {
    text-decoration: none;
  }
`;
