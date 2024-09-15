/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  Stack,
  Image,
  Text,
  CardFooter,
  Divider,
  Button,
  ButtonGroup,
  Heading,
  Box,
  useToast,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useProductStore } from "../src/store/product";
import { useState } from "react";
function ProductCard({ product }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 2000,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 2000,
      });
    }
  };

  const handleUpdateProduct = async (product, id) => {
    const { success, message } = await updateProduct(product, id);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 2000,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 2000,
      });
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box _hover={{ transform: "translateY(-5px)", shadow: "xl", scale: "1.1" }} shadow={"lg"}>
      <Card maxW="sm">
        <CardBody>
          <Image src={product.image} alt={product.image} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.name}</Heading>
            <Text color="blue.600" fontSize="2xl">
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue" onClick={onOpen}>
              <MdEdit />
            </Button>
            <Button variant="solid" colorScheme="red" onClick={() => handleDeleteProduct(product._id)}>
              <MdDelete />
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product name"
                name="name"
                value={updatedProduct.name}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
              ></Input>
              <Input
                placeholder="Product price"
                name="price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
              ></Input>
              <Input
                placeholder="Product image"
                name="image"
                value={updatedProduct.image}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
              ></Input>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleUpdateProduct(updatedProduct, product._id)}>
              Update
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ProductCard;
