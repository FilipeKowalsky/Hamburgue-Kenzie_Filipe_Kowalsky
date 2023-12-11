import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: var(--color-grey-0);
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  gap: 15px;

  @media (min-width: 1200px) {
    flex-direction: row;
    width: 90%;
    max-width: 1500px;
  }
`;

export const DivHeaderStyeld = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  justify-content: space-between;
  align-items: center;
`

export const ImgCart = styled.img`
  width: 36px;
`

export const ImgLogo = styled.img`
  width: 140px;
  height: 20px;
`

export const InputStyled = styled.input`
  border: none;
  width: 80%;
`

export const FormStyled = styled.form`
  display: flex;
  justify-content: space-between;
  border: 2px solid var(--color-grey-100);
  background: rgb(255, 255, 255);
  padding: 8px;
  border-radius: 8px;
  width: 90%;

  @media (min-width: 1200px) {
    max-width: 365px;
  }
`;

export const StyledButtonCart = styled.button`
  border: transparent;
  background: transparent;
`

export const ButtonSearch = styled.button`
  width: 45px;
  height: 35px;
  border: 1px solid var(--color-color-primary);
  background: var(--color-color-primary);
  border-radius: 8px;

  :hover{
  border: 1px solid var(--color-color-primary-5);
  background: var(--color-color-primary-5);
  }
`

export const ImgSearch = styled.img`
  width: 13px;
`