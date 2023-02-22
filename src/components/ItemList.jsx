import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ mascotas }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {mascotas?.map((mascotas) => (
          <Item
            key={mascotas.id}
            id={mascotas.id}
            name={mascotas.name}
            description={mascotas.description}
            price={mascotas.price}
            stock={mascotas.stock}
            category={mascotas.category}
            img={mascotas.img}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;