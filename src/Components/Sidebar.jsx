import { Box, Flex, Image, Tag, Text } from "@chakra-ui/react";
import React from "react";

import logo from "../Assets/Logo.svg";
import inbox from "../Assets/inbox.svg";
import list from "../Assets/list.svg";
import state from "../Assets/state.svg";
import setting from "../Assets/setting.svg";
import home from "../Assets/home.svg";

const Sidebar = ({ sidebarStatus }) => {
  return (
    <Box
      className="sidebar"
      minW={[sidebarStatus ? "86%" : "0", sidebarStatus ? "16%" : "0"]}
      w={[sidebarStatus ? "86%" : "0", sidebarStatus ? "18%" : "0"]}
      bg="#43425D"
      transition="all .3s ease"
      color="white"
    >
      <Flex align="center" h="70px" w="100%" px="1.2rem" bg="#3C3B54">
        <Image src={logo} w={["30%", "50%"]} />
      </Flex>

      <Box>
        <Flex
          h="54px"
          align="center"
          px="1rem"
          _hover={{ bg: "#3C3B54" }}
          _active={{ borderLeft: "3px solid #8962ff" }}
          cursor="pointer"
        >
          <Image w="10%" src={home} />
          <Text px=".8rem">Home</Text>
        </Flex>
        <Flex
          h="54px"
          align="center"
          px="1rem"
          _hover={{ bg: "#3C3B54" }}
          _active={{ borderLeft: "3px solid #8962ff" }}
          cursor="pointer"
        >
          <Image w="10%" src={state} />
          <Text px=".8rem">Dashboard</Text>
        </Flex>
        <Flex
          h="54px"
          align="center"
          px="1rem"
          _hover={{ bg: "#3C3B54" }}
          _active={{ borderLeft: "3px solid #8962ff" }}
          cursor="pointer"
        >
          <Flex w="10rem" align="center" h="54px">
            <Image w={["17%", "14%"]} src={inbox} />
            <Text px=".8rem">Inbox</Text>
          </Flex>
          <Flex>
            <Tag
              size={["xs", "sm"]}
              p=".05rem .5rem"
              bg="tomato"
              ml={[10, 2]}
              color={"white"}
            >
              New
            </Tag>
          </Flex>
        </Flex>
        <Flex
          h="54px"
          align="center"
          px="1rem"
          _hover={{ bg: "#3C3B54" }}
          _active={{ borderLeft: "3px solid #8962ff" }}
          cursor="pointer"
        >
          <Image w="10%" src={list} />
          <Text px=".8rem">Products</Text>
        </Flex>
        <Flex
          h="54px"
          align="center"
          px="1rem"
          _hover={{ bg: "#3C3B54" }}
          _active={{ borderLeft: "3px solid #8962ff" }}
          cursor="pointer"
        >
          <Image w="10%" src={setting} />
          <Text px=".8rem">Admin</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
