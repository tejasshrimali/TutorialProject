import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreatePost from "../pages/createPost";
import NavBar from "../components/NavBar";

function App() {
  return (
    <Box minHeight={"100vh"} bg={useColorModeValue("gray.100", "gray.9000")}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/createPost" element={<CreatePost></CreatePost>}></Route>
      </Routes>
    </Box>
  );
}

export default App;
