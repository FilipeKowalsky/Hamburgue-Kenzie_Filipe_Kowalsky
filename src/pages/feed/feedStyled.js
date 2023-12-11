import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (min-width: 1200px) {
    width: 90%;
    max-width: 1500px;
  }
`

export const UlContainer = styled.ul`
  display: flex;
  margin: 20px 0px 0px 0px;
  width: 90%;
  overflow-x : auto;
  gap:20px;

  @media (min-width: 1200px) {
    width: 100%;
    max-width: 1500px;
    flex-wrap: wrap;
    gap:90px;
  }
`