import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 300px;
  min-height: 350px;
  border: 2px solid var(--color-grey-100);
  border-radius: 5px;
  padding-bottom: 20px;

  :hover{
    border: 2px solid var(--color-color-primary);
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 0 0 0;
  background: var(--color-grey-0);
`

export const Image = styled.img`
  width: 55%;
`

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0 0 0 15px;
`

export const Category = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0 0 0 15px;
  color: var(--color-grey-300);
`

export const Price = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0 0 0 15px;
  color: var(--color-color-primary);
`

export const ButtonAdd = styled.button`
  width: 105px;
  height: 40px;
  background: var(--color-grey-400);
  border: 1px solid var(--color-grey-400);
  border-radius: 8px;
  color: #fff;
  margin-left: 15px;

  :hover{
    background: var(--color-color-primary);
    border: var(--color-color-primary);
  }

  :active{
    background: var(--color-color-primary-5);
    border: var(--color-color-primary-5);
  }
`