import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { tableData } from "../Data/TableData";

const TableList = () => {
  return (
    <Box p="1rem" pb="2.5rem" position="relative">
      <Flex mb="1rem">
        <Text>Referrer</Text>
      </Flex>
      <TableContainer h="20rem">
        <Table size="sm" color="#4D4F5C">
          <Thead bg="#F5F6FA" h="50px">
            <Tr>
              <Th>Location</Th>
              <Th>Views</Th>
              <Th>Sales</Th>
              <Th>Conversion</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData?.map((el) => {
              return (
                <Tr key={el.id} h="45px">
                  <Td>{el.location}</Td>
                  <Td>{el.view}</Td>
                  <Td>{el.sale}</Td>
                  <Td>{el.conversion}%</Td>
                  <Td>${`${el.total.toLocaleString()}`}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <Flex position="absolute" bottom="3">
        <Link color="#0b4cff" fontSize="14px" px="1rem">
          Show more
        </Link>
      </Flex>
    </Box>
  );
};

export default TableList;
