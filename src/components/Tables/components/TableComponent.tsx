import { Td, Text, Tr } from "@chakra-ui/react";

interface TableComponentProps {
  state: string;
  lga: string;
  men: string;
  women: string;
}

export const TableComponent: React.FC<TableComponentProps> = ({
  state,
  lga,
  men,
  women,
}) => {
  return (
    <Tr>
      <Td minWidth="150px">
        <Text fontSize={{ sm: "xs", md: "15px" }}>{state}</Text>
      </Td>

      <Td minWidth="150px">
        <Text fontSize={{ sm: "xs", md: "15px" }}>{lga}</Text>
      </Td>

      <Td minWidth="150px">
        <Text fontSize={{ sm: "xs", md: "15px" }}>{men}</Text>
      </Td>

      <Td minWidth="150px">
        <Text fontSize={{ sm: "xs", md: "15px" }}>{women}</Text>
      </Td>
    </Tr>
  );
};
