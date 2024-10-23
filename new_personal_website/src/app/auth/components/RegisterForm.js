//needs message to display whether sign up was successful or not, and to display error when an error occurs

"use client";
import { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  Flex,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import HoverButton from "@/components/ui/hoverbutton";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/user/register",
        {
          email,
          password,
          firstName,
          lastName,
        },
        {
          headers: {
            "Content-Type": "application/json", // Ensure this is set
          },
        }
      );
      setError(response.data.message);
      if (response.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.error("Error registering user: ", err.response.data.message);
      setError(err.response.data.error || "Error");
    }
  };

  const handleReturnHome = async (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div>
      {" "}
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="100vh" // This makes the form vertically centered
        bg="gray.100" // Optional: Set background color for the page
      >
        <Flex
          direction="column"
          p={8}
          rounded="md"
          bg="white"
          boxShadow="lg"
          width="100%" // Full width on small screens
          maxW="400px" // Limit the width of the form
        >
          <form onSumbmit={handleRegister}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <HStack spacing={4}>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl id="firstName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                ></Input>
              </FormControl>
            </HStack>
            <HStack spacing={4} justify="space-evenly" width="100%">
              <HoverButton onClick={handleRegister} text="Register" />
              <HoverButton onClick={handleReturnHome} text="Cancel" />
            </HStack>
            {error}
          </form>
        </Flex>
      </Flex>
    </div>
  );
};

export default Register;
