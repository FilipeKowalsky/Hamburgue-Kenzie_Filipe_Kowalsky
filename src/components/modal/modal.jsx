import { useRef, useState } from "react";
import { useEffect } from "react";
import {
  ModalContainer,
  HeaderModal,
  MainModal,
  ButtonCloseModal,
  ModalBox,
  Line,
  EmptyCart,
  BoxImg,
  CartContainer,
  CartBox,
  Div,
  Image,
  ConfButton,
  DivPrice,
  ButtonRemove,
  Circle
} from "./modalStyled";
import Bin from "../../assets/bin.png";

export const Modal = ({ setIsOpen, Cart, setCart }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const [totalValue, setTotalValue] = useState(0)

  useEffect(() =>{
    const valueTotalCart = () =>{
      const total = Cart.reduce((valueTotal, item) => valueTotal + item.price * item.amount,0)
      setTotalValue(total)
    }
    valueTotalCart()
  },[Cart])

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const deleteProduct = (item) =>{
    const newCart = Cart.filter(obj => obj.id !== item.id)
    setCart(newCart)
  }

  return (
    <ModalContainer role="dialog" onClick={handleModalClick}>
      <ModalBox ref={modalRef}>
        <HeaderModal>
          <h2>Carrinho de compras</h2>
          <ButtonCloseModal ref={buttonRef} onClick={() => setIsOpen(false)}>
            X
          </ButtonCloseModal>
        </HeaderModal>
        <MainModal>
          {Cart.length > 0 ? 
          <CartContainer>
            {Cart.map(product => (
              <CartBox key={product.id}>
                <Div>
                  <BoxImg>
                    <Circle>
                      x{product.amount}
                    </Circle>
                    <Image src={product.img} alt="Foto do produto" />
                  </BoxImg>
                  <h3>{product.name}</h3>
                </Div>
                <ConfButton onClick={() =>{
                  deleteProduct(product)
                }}>
                  <img src={Bin} alt="" />
                </ConfButton>
              </CartBox>
            ))}
          </CartContainer> : 
          <EmptyCart>
            <h3>Carrinho vario!</h3>
          </EmptyCart>}
          <Line></Line>
          <DivPrice>
            <h4>Total</h4>
            <p>{totalValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}</p>
          </DivPrice>
          <ButtonRemove onClick={() => {
            setCart([])
          }} >Remover todos</ButtonRemove>
        </MainModal>
      </ModalBox>
    </ModalContainer>
  );
};
