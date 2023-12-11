import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/header/header";
import { SnackItem } from "../../components/card/card"
import { UlContainer, Main } from "./feedStyled"
import { Modal } from "../../components/modal/modal"

export const Feed = () => {
  const [snacks, setSnacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [filteredSnacks, setFilteredSnacks] = useState([]);
  const [shouldFilter, setShouldFilter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    const getSnacks = async () => {
      try {
        const response = await api.get("");
        setSnacks(response.data);
        setFilteredSnacks(response.data);
        setIsLoading(false);
      } catch (error) {
  
      }
    };

    getSnacks();
  }, []);

  useEffect(() => {
    if (shouldFilter) {
      filterSnacks();
      setShouldFilter(false);
    }
  }, [shouldFilter]);

  const filterSnacks = () => {
    let filtered = snacks;

    if (inputSearch.trim() !== "") {
      const searchKeyword = inputSearch.trim().toUpperCase();
      filtered = filtered.filter(
        (snack) =>
          snack.name.toUpperCase().includes(searchKeyword) ||
          snack.category.toUpperCase().includes(searchKeyword)
      );
    }

    if (inputCategory.trim() !== "") {
      const categoryKeyword = inputCategory.trim().toUpperCase();
      filtered = filtered.filter((snack) =>
        snack.category.toUpperCase().includes(categoryKeyword)
      );
    }

    setFilteredSnacks(filtered);
  };

  const handleSearch = () => {
    setShouldFilter(true);
  };

  const addCart = (item)=>{
    const checkItens = Cart.find((obj) => obj.id === item.id)
    if(checkItens){
      const attCart = Cart.map((obj) => {
        if(obj.id === item.id){
          return {...obj, amount : obj.amount + 1}
        }
        return obj;
      })
      setCart(attCart)
    }else{
      const attCart = {...item, amount : 1}
      setCart([...Cart , attCart])
    }
  }

  return (
    <>
      <Header
        setInputSearch={setInputSearch}
        setInputCategory={setInputCategory}
        handleSearch={handleSearch}
        setIsOpen={setIsOpen}
      />
      <Main>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <UlContainer>
            {filteredSnacks.map((snack) => (
              <SnackItem addCart={addCart} key={snack.id} snack={snack} />
            ))}
          </UlContainer>
        )}
      </Main>
      {isOpen ? <Modal Cart={Cart} setCart={setCart} 
      setIsOpen={setIsOpen}
      /> : null}
    </>
  );
};