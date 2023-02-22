import React from 'react'
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
  const { category } = useParams();

  const categoryFilter = Data.filter((mascotas) => mascotas.category === category);
  return (
    <div>
      <Center bg="#abd1c6" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Este es el catálogo completo 
        </Heading>
      </Center>
      {category ? <ItemList mascotas={categoryFilter} /> : <ItemList mascotas={Data} />}
    </div>
  );
};

export default ItemListContainer