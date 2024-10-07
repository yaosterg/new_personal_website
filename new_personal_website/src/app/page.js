import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Box bg="tomato" w="100%" color="black">
        <Navbar />
      </Box>
      <Box bg="white" w="100%" h="100%" color="black">
        <h1>Welcome to my new website under construction</h1>

        <p>This is the main page</p>
      </Box>
    </div>
  );
}
