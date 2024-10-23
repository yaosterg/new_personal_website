"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useAuth } from "../AuthContext";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase";
import { useState, useEffect } from "react";
import axios from "axios";
import FormModal from "../auth/components/LoginModal";
import HoverButton from "@/components/ui/hoverbutton";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentUser } = useAuth();
  const router = useRouter;
  const [firstName, setFirstName] = useState("");

  //use effect can be deleted, it's used to display user data atm.
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);

      const fetchUser = async (uid) => {
        try {
          const response = await axios.get("/api/user/userdata", {
            params: { uid: uid },
          });
          setFirstName(response.data.user.firstName);
        } catch (e) {
          console.log("There was an error fetching user data");
        }
      };
      fetchUser(currentUser.uid);
    } else {
      console.log("not logged in");
    }
  }, []);

  const handleSignout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.error("Error signing out", err);
    }
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
          </HStack>

          <Flex alignItems={"center"}>
            {currentUser ? (
              <div>
                <p>
                  Welcome <Link href="/user/dashboard"> {firstName}</Link>!
                </p>

                <button
                  onClick={(e) => {
                    handleSignout();
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <FormModal />
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
