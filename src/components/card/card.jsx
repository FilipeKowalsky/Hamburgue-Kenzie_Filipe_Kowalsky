import React from "react";
import { Card, ImgContainer, Image, Title, Category, Price, ButtonAdd } from "./cardStyled"

export const SnackItem = ({ snack, addCart }) => {
  return (
    <Card>
      <ImgContainer>
        <Image src={snack.img} alt={snack.name} />
      </ImgContainer>
      <Title>{snack.name}</Title>
      <Category>{snack.category}</Category>
      <Price>{snack.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}</Price>
      <ButtonAdd onClick={()=>{
        addCart(snack)
      }}>Adicionar</ButtonAdd>
    </Card>
  );
};