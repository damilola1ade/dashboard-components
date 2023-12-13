import { Box, Heading } from "@chakra-ui/react";
import { BarChart } from "./components/BarChart";


export const Charts = () => {
  return (
    <Box w='55%' mb={12}>
      <Heading>Charts</Heading>
      <BarChart />
    </Box>
  );
};
