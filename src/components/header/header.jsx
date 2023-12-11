import React from "react";
import Logo from "../../assets/logoBurguerKenzie.png";
import ImgShopCart from "../../assets/shoppingCart.png";
import Search from "../../assets/magnifyingGlass.png";
import {  ImgSearch,  ButtonSearch,  InputStyled,  FormStyled,  HeaderStyled,  DivHeaderStyeld,  ImgCart,  ImgLogo, HeaderContainer, StyledButtonCart} from "./headerStyled";

export const Header = ({ setInputSearch, handleSearch, setIsOpen }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <HeaderStyled>
      <HeaderContainer>
        <DivHeaderStyeld>
          <ImgLogo src={Logo} alt="Logo Burguer Kenzie" />
          <StyledButtonCart onClick={() => setIsOpen (true)}>
            <ImgCart src={ImgShopCart} />
          </StyledButtonCart>
        </DivHeaderStyeld>
        <FormStyled onSubmit={handleSubmit}>
          <InputStyled
            type="text"
            placeholder="Buscar"
            onChange={(event) => setInputSearch(event.target.value)}
          />
          <ButtonSearch type="submit">
            <ImgSearch src={Search} />
          </ButtonSearch>
        </FormStyled>
      </HeaderContainer>
    </HeaderStyled>
  );
};
