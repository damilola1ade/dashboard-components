import { Stack } from "@chakra-ui/react";
import { Charts, Tables } from "./components";

const App = () => {
  return (
    <Stack mt={12} spacing={12} justifyContent="center" alignItems="center">
      <Tables />
      <Charts />
    </Stack>
  );
};

export default App;
