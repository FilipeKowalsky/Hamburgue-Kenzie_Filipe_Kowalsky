import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-grey-300-3);
  inset: 0;
  position: fixed;
  display: flex;
  -webkit-box-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalBox = styled.div`
  width: clamp(190px, 90%, 500px);
`

export const HeaderModal = styled.div`
  width: 100%;
  height: 54px;
  background: var(--color-color-primary);
  border-radius: 5px 5px 0 0;
  padding: 0px 22px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-weight: 700;
  color: rgb(255, 255, 255); 
`

export const EmptyCart = styled.div`
  height: 75%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonCloseModal = styled.button`
  border: none;
  background: var(--color-color-primary);
  color: rgb(255, 255, 255);
  font-size: 15px;
`

export const MainModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  background: #fff;
  border-radius: 0 0 5px 5px;
  padding-bottom: 10px;
`

export const Line = styled.div`
  width: 90%;
  height: 2px;
  background: var(--color-grey-100);
`

export const BoxImg = styled.div`
  width: 82px;
  height: 82px;
  background: var(--color-grey-400);
  position: relative;
`

export const CartContainer = styled.ul`
  width: 100%;
  height: 255px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`

export const CartBox = styled.li`
  width: 90%;
  height: 82px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 15px;
`

export const Div = styled.div`
  display: flex;
  gap: 10px;
`

export const DivPrice = styled.div`
  width: 100%;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 100%;
`  

export const ConfButton = styled.button`
  border: none;
  background: none;
`

export const ButtonRemove = styled.button`
  width: 90%;
  height: 45px;
  border: 1px solid var(--color-grey-100);
  background: var(--color-grey-100);
  border-radius: 8px;
`

export const Circle = styled.div`
  width: 25px;
  height: 25px;
  background: var(--color-color-primary);
  border: 1px solid var(--color-color-primary);
  border-radius:50%;
  position: absolute;
  display: flex;
  align-items: baseline;
  justify-content: center;
`