import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../src/store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW={"container.xl"} py={10}>
      <VStack spacing={8}>
        <Text
          bgGradient="linear(to-l, #55ddff, #5555ff)"
          textAlign={"center"}
          bgClip="text"
          fontSize={{
            base: "22",
            sm: "28",
          }}
          fontWeight="bold"
        >
          Current Product
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => {
            return <ProductCard product={product} key={product._id}></ProductCard>;
          })}
        </SimpleGrid>
        {products.length == 0 && (
          <Text fontSize={"lg"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
            No products found{" "}
            <Link to={"/createPost"}>
              <Text as={"span"} color={"blue.500"} _hover={{ textDecoration: "underline" }}>
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
}

export default HomePage;
