import {
  Avatar,
  Box,
  Center,
  Flex,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CgFileDocument, CgMenuLeft, CgSearch } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import DrewAvatar from "../Assets/profile-pic-02.jpg";
import AlexaAvatar from "../Assets/profile-pic-06.jpg";
import EvaAvatar from "../Assets/profile-pic-05.jpg";
import profilePic from "../Assets/profile-pic-01.jpg";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = ({ toogleStatus }) => {
  const [sidebarToogle, setSidebarToogle] = useState(false);

  const handleToogle = () => {
    toogleStatus(!sidebarToogle);
    setSidebarToogle(!sidebarToogle);
  };

  return (
    <Flex
      align="center"
      h="70px"
      padding="0 20px"
      justify={"end"}
      background="#FFFFFF 0% 0% no-repeat padding-box"
      boxShadow="0px 2px 6px #0000000A"
      opacity="1"
      position="relative"
    >
      <Center w="4rem" position="absolute" left="0">
        <CgMenuLeft
          fontSize="24px"
          color="#7a7a7d"
          onClick={handleToogle}
          cursor="pointer"
        />
      </Center>
      <Flex
        className="leftNav"
        justify="space-between"
        w={["10%", "80%"]}
        // display={[
        //   sidebarToogle ? "none" : "flex",
        //   sidebarToogle ? "flex" : "flex",
        // ]}
      >
        <Flex color="#0000001A" align="center" w="80%" >
        
          <Flex
            bg="transparent"
            border="none"
            variant="primary"
            padding="0"
            // align="center"
            justify="space-between"
          >
            <CgSearch fontSize="20px" />
          </Flex>
          <Input
            display={["none", "flex"]}
            type="text"
            placeholder="Search transactions, invoices or help"
            fontSize="16px"
            color="#4D4F5C"
            border="none"
            focusBorderColor="none"
          />
        </Flex>
      </Flex>
      <Flex
        display={[sidebarToogle? "none" : 'flex', sidebarToogle? "flex" : 'flex']}
        className="rightNav"
        justify="space-between"
        align="center"
        w={["5rem", "180px"]}
        h="40px"
      >
        <Flex className="notificationDiv">
          <Menu w="100%">
            <MenuButton
              size="xs"
              // height="1.5rem"
              // w="1.5rem"
              p=".2rem"
              align="center"
              justify="center"
              as={Flex}
              rounded={"full"}
              cursor={"pointer"}
              bg="#fff"
              _hover={{ bg: "#f0f0f0", transition: "all .3s ease" }}
              _active={{ bg: "#f0f0f0" }}
              position="relative"
              role="group"
              transition="all .3s ease"
            >
              <IoMdNotificationsOutline fontSize="20px" color="#c3c3c3" />
              <Icon
                transition="all .2s ease"
                _groupActive={{ opacity: 0, transition: "all .2s ease" }}
                w=".6rem"
                h=".6rem"
                viewBox="0 0 200 200"
                color="green.400"
                position="absolute"
                top="2px"
              >
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
            </MenuButton>
            <MenuList margin="auto" w={["20rem", "22rem"]} mt={"1rem"}>
              <MenuItem h="76px" w="100%" _hover={{ bg: "#f5faff" }}>
                <Flex justify="space-between" w="100%">
                  <Center w={["12%", "15%"]}>
                    <Avatar
                      h={["2rem", "2.4rem"]}
                      w={["2rem", "2.4rem"]}
                      name="Drew"
                      src={DrewAvatar}
                    />
                  </Center>
                  <Box w="70%" color="#43425D" p="0 .5rem">
                    <Text
                      fontSize={["12px", "14px"]}
                      letterSpacing="0px"
                      color="#4D4F5C"
                      fontWeight={"600"}
                    >
                      Bravid Kames
                    </Text>
                    <Text opacity="50%" fontSize={["10px", "12px"]}>
                      Assigned you on the call with Sara
                    </Text>
                  </Box>
                  <Box w="20%">
                    <Text opacity="50%" fontSize={["10px", "12px"]}>
                      2 min ago
                    </Text>
                  </Box>
                </Flex>
              </MenuItem>
              <MenuItem h="76px" _hover={{ bg: "#f5faff" }}>
                <Flex justify="space-between" w="100%">
                  <Center w="15%">
                    <Avatar
                      h={["2rem", "2.4rem"]}
                      w={["2rem", "2.4rem"]}
                      name="Alexa"
                      src={AlexaAvatar}
                    />
                  </Center>
                  <Box w="70%" color="#43425D" p="0 .5rem">
                    <Text
                      fontSize={["12px", "14px"]}
                      letterSpacing="0px"
                      color="#4D4F5C"
                      fontWeight={"600"}
                    >
                      Alexa Marry
                    </Text>
                    <Text opacity="50%" fontSize={["10px", "12px"]}>
                      Marked the task <a href="newUi"style={{ color: "#3B86FF" }}>New UI</a>{" "}
                      as done
                    </Text>
                  </Box>
                  <Box w="20%">
                    <Text opacity="50%" fontSize={["10px", "12px"]}>
                      5 min ago
                    </Text>
                  </Box>
                </Flex>
              </MenuItem>
              <MenuItem h="76px" _hover={{ bg: "#f5faff" }}>
                <Flex justify="space-between" w="100%">
                  <Center w="15%">
                    <Avatar
                      h={["2rem", "2.4rem"]}
                      w={["2rem", "2.4rem"]}
                      name="Eva"
                      src={EvaAvatar}
                    />
                  </Center>
                  <Box w="70%" color="#43425D" p="0 .5rem">
                    <Text
                      fontSize={["12px", "14px"]}
                      letterSpacing="0px"
                      color="#4D4F5C"
                      fontWeight={"600"}
                    >
                      Eva Maria
                    </Text>
                    <Text opacity="50%" fontSize={["10px", "12px"]}>
                      Added a new comment on Sales task
                    </Text>
                  </Box>
                  <Box w="20%">
                   <Text opacity="50%" fontSize={["10px", "12px"]}> 
                      10 min ago
                    </Text>
                  </Box>
                </Flex>
              </MenuItem>

              <MenuItem h="76px" _hover={{ bg: "#f5faff" }}>
                <Flex justify="space-between" w="100%">
                  <Center w="15%">
                  </Center>
                  <Box w="70%" color="#43425D" p="0 .5rem">
                    <a href="seemore" style={{color:"blue"}}> See More</a>
                  </Box>
                </Flex>
              </MenuItem>

            </MenuList>
          </Menu>
        </Flex>
        <Menu>
          <MenuButton as={Flex} align="center" w="80%" role="group">
            <Flex justify="space-around" align="center">
              <Flex align="center" color="#4D4F5C" display={["none", "flex"]}>
                <Text fontSize={["12px", "14px"]} cursor="pointer">
                  John Doe
                </Text>
                <ChevronDownIcon
                  transition="all .3s ease"
                  _groupActive={{
                    transform: "rotate(180deg)",
                    transition: "all .3s ease",
                  }}
                />
              </Flex>
              <Avatar size="xs" src={profilePic} />
            </Flex>
          </MenuButton>
          <MenuList color="#4c4b6a" fontSize="16px" w="10rem" mt={"1rem"}>
            <MenuItem _hover={{ bg: "#f5faff" }}>
              <Flex w="100%" align="center">
                <AiOutlineUser color="#dcdcdc" fontSize={["14px", "16px"]} />
                <Text p="0 15px" fontSize={["14px", "16px"]}>
                  My Profile
                </Text>
              </Flex>
            </MenuItem>
            <MenuItem _hover={{ bg: "#f5faff" }}>
              <Flex w="100%" align="center">
                <CgFileDocument color="#dcdcdc" fontSize={["14px", "16px"]} />
                <Text p="0 15px" fontSize={["14px", "16px"]}>
                  Billing
                </Text>
              </Flex>
            </MenuItem>
            <MenuItem _hover={{ bg: "#f5faff" }}>
              <Flex w="100%" align="center">
                <FiLogOut color="#dcdcdc" fontSize={["14px", "16px"]} />
                <Text p="0 15px" fontSize={["14px", "16px"]}>
                  Logout
                </Text>
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
