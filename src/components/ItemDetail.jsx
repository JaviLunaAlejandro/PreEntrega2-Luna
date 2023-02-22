import { Center, Card, CardBody, Image, Stack, Heading, Text, CardFooter, Divider, } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ mascotas }) => {
  const { id } = useParams();

  const mascotaFilter = mascotas.filter((mascota) => mascota.id == id);

  return (
    <>
      {mascotaFilter.map((mascota) => (
        <div key={mascota.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                  <Image src={mascota.img} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{mascota.name}</Heading>
                  <Text >
                    Description: {mascota.description}
                  </Text>
                  <Text>
                    Category: {mascota.category}
                  </Text>
                  <Text>
                    Stock: {mascota.stock}
                  </Text>
                  <Text >
                    Price: $ {mascota.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={mascota.stock}
                  id={mascota.id}
                  price={mascota.price}
                  name={mascota.name}
                  img={mascota.img}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;