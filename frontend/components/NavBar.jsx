import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus, CiSun } from "react-icons/ci";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container minW={"900px"} px={1}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        h={16}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
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
          <Link to={"/"}>Product Viewer</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/createPost"}>
            <Button>
              <CiSquarePlus />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode == "light" ? <WiMoonAltThirdQuarter size={20} /> : <CiSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default NavBar;
