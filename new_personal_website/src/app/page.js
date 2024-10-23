import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HoverButton from "@/components/ui/hoverbutton";

export default function Home() {
  return (
    <div>
      <Box bg="tomato" w="100%" color="black">
        <Navbar />
      </Box>
      <Box bg="white" w="100%" h="100%" color="black">
        <h1>#Main Page# </h1>
        <p>Welcome to my new website under construction</p>
      </Box>
    </div>
  );
}
