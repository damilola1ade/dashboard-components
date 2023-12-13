import { Box, Table, Thead, Tr, Th, Tbody, Heading } from "@chakra-ui/react";
import { TableComponent } from "..";
import { tableData } from "../../dummyData";

const captions = ["State", "LGA", "Population(Men)", "Population(Women)"];

export const Tables = () => {
  return (
    <Box>
      <Heading>Table</Heading>
      <Table variant="simple" size="md" mt={10}>
        <Thead>
          <Tr>
            {captions.map((caption, idx) => {
              return (
                <Th color="black" fontSize='sm' key={idx}>
                  {caption}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => {
            return (
              <TableComponent
                state={data.state}
                lga={data.lga}
                men={data.men}
                women={data.women}
              />
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};
